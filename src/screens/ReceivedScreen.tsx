import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";

import { EmptyComponent, LetterCardComponent } from "../components";
import { colors } from "../constants";
import { useLettersStore } from "../hooks";
import { Letter } from "../models";
import { ReceivedNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<ReceivedNavigatorParamList, "Received"> {}

const Separator = () => <View style={{ height: 8 }} />;

export const ReceivedScreen: React.FC<Props> = ({ navigation }) => {
  const { receivedLetters, getReceivedLetters } = useLettersStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      await getReceivedLetters();
      setIsLoading(false);
    };

    getData();
  }, []);

  const renderItem = ({ item }: { item: Letter }) => {
    return (
      <LetterCardComponent
        letter={item}
        type="received"
        onView={() => navigation.push("LetterDetail", item)}
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
          data={receivedLetters}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={
            <EmptyComponent text="Aún to tiene cartas recibidas" />
          }
        />
      )}
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
