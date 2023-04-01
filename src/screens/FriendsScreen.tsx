import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const FriendsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FriendsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
