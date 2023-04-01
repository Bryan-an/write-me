import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { FilledButtonComponent } from "../components";
import { colors } from "../constants";
import { ReceivedNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<ReceivedNavigatorParamList, "LetterDetail"> {}

export const LetterDetailScreen: React.FC<Props> = ({ navigation, route }) => {
  const { title, from, date, message, to } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.value}>
          <Text style={styles.key}>De: </Text>
          {from}
        </Text>
      </View>
      <View>
        <Text style={styles.value}>
          <Text style={styles.key}>Para: </Text>
          {to}
        </Text>
      </View>
      <View>
        <Text style={styles.value}>
          <Text style={styles.key}>Fecha: </Text>
          {date.toDate().toLocaleDateString()}
        </Text>
      </View>
      <View>
        <Text style={styles.message}>{message}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FilledButtonComponent text="Volver" onPress={() => navigation.pop()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 16,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
    paddingBottom: 16,
  },
  key: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
  },
  value: {
    fontWeight: "400",
    fontSize: 16,
    paddingVertical: 3,
  },
  message: {
    fontSize: 16,
    paddingTop: 16,
  },
  buttonContainer: {
    paddingVertical: 32,
  },
});
