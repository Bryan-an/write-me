import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Pressable, PressableProps } from "react-native";

import { colors } from "../constants";

interface Props {
  icon: string;
  onPress?: PressableProps["onPress"];
}

export const FloatingButtonComponent: React.FC<Props> = ({ icon, onPress }) => {
  return (
    <Pressable
      style={styles.button}
      android_ripple={{ radius: 25 }}
      onPress={onPress}
    >
      <Ionicons name={icon as any} size={30} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: colors.primary,
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
});
