import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { colors } from "../constants";

interface Props {
  text: string;
}

export const EmptyComponent: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="email-newsletter"
        size={100}
        color={colors.primary}
      />
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.primary,
  },
});
