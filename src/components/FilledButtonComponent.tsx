import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

import { colors } from "../constants";

interface Props {
  text: string;
  onPress?: TouchableOpacityProps["onPress"];
  disabled?: TouchableOpacityProps["disabled"];
  isLoading?: boolean;
}

export const FilledButtonComponent: React.FC<Props> = ({
  text,
  onPress,
  disabled,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={isLoading ? true : disabled}
    >
      {isLoading ? (
        <ActivityIndicator size={20} color="white" />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
