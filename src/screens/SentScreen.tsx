import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SentScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
