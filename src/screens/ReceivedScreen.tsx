import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { FloatingButtonComponent, LetterCardComponent } from "../components";
import { useLettersStore } from "../hooks";
import { Letter } from "../models";
import { ReceivedNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<ReceivedNavigatorParamList, "Received"> {}

const Separator = () => <View style={{ height: 8 }} />;

export const ReceivedScreen: React.FC<Props> = ({ navigation }) => {
  const { receivedLetters } = useLettersStore();

  const renderItem = ({ item }: { item: Letter }) => {
    return <LetterCardComponent letter={item} type="received" />;
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 16 }} />
      <FlatList
        data={receivedLetters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={Separator}
      />
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
