import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import { colors } from "../constants";

interface Props {
  placeholder: TextInputProps["placeholder"];
  label: string;
  keyboardType?: TextInputProps["keyboardType"];
  secureTextEntry?: TextInputProps["secureTextEntry"];
  value?: TextInputProps["value"];
  onChangeText?: TextInputProps["onChangeText"];
  error?: string;
  autoCapitalize?: TextInputProps["autoCapitalize"];
}

export const TextInputComponent: React.FC<Props> = ({
  placeholder,
  label,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
  error,
  autoCapitalize,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text
          style={
            error
              ? { color: "red" }
              : isFocus
              ? { color: colors.secondary }
              : undefined
          }
        >
          {label}
        </Text>
      </View>
      <TextInput
        style={
          error
            ? [styles.input, { borderColor: "red" }]
            : isFocus
            ? [styles.input, { borderColor: colors.secondary }]
            : styles.input
        }
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoCapitalize={autoCapitalize}
      />
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  labelContainer: {
    paddingBottom: 4,
  },
  errorContainer: {
    paddingTop: 4,
  },
  error: {
    color: "red",
    fontSize: 13,
  },
});
