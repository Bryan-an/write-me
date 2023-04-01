import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { colors } from "../constants";
import { Letter } from "../models";

interface Props {
  letter: Letter;
  type: "received" | "sent";
}

export const LetterCardComponent: React.FC<Props> = ({
  letter: { title, from, to, date },
  type,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.email}>
          {type === "received" ? `De: ${from}` : `Para: ${to}`}
        </Text>
        <Text style={styles.date}>
          Fecha: {new Date(date).toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Ionicons name="reader" size={30} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    elevation: 4,
    borderColor: colors.primary,
    width: "100%",
    padding: 16,
    borderRadius: 8,
    flexDirection: "row",
  },
  infoContainer: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: "center",
  },
  title: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "800",
    paddingBottom: 8,
  },
  email: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    paddingTop: 2,
    fontSize: 14,
  },
});
