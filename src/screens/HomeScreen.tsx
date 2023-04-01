import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { useUserStore } from "../hooks";

export const HomeScreen = () => {
  const { logOut } = useUserStore();
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={logOut}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
