import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";

import {
  EmptyComponent,
  FloatingButtonComponent,
  LetterCardComponent,
} from "../components";
import { colors } from "../constants";
import { useLettersStore } from "../hooks";
import { Letter } from "../models";
import { SentNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<SentNavigatorParamList, "Sent"> {}

const Separator = () => <View style={{ height: 8 }} />;

export const SentScreen: React.FC<Props> = ({ navigation }) => {
  const { sentLetters, getSentLetters, deleteLetter } = useLettersStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await getSentLetters();
      setIsLoading(false);
    };

    getData();
  }, []);

  const renderItem = ({ item }: { item: Letter }) => {
    return (
      <LetterCardComponent
        letter={item}
        type="sent"
        onView={() => navigation.push("LetterDetail", item)}
        onEdit={() => navigation.push("LetterForm", item)}
        onDelete={() => deleteLetter(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 16 }} />
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={sentLetters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={
            <EmptyComponent text="Aún to tiene cartas enviadas" />
          }
        />
      )}
      <FloatingButtonComponent
        icon="add"
        onPress={() => navigation.push("LetterForm")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    paddingBottom: 70,
    paddingHorizontal: 16,
  },
});
