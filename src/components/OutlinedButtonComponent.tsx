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

export const OutlinedButtonComponent: React.FC<Props> = ({
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
        <ActivityIndicator size={20} color={colors.primary} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.primary,
  },
});
