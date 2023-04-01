import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "../constants";
import { useUserStore } from "../hooks";

export const HomeHeaderComponent = () => {
  const { user } = useUserStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require("../../assets/images/writing-pen.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>WRITE ME</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcome}>Bienvenido</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="heart" size={30} color={colors.primary} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 4,
  },
  titleContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  title: {
    fontWeight: "900",
    fontSize: 26,
    color: colors.primary,
    paddingStart: 8,
  },
  image: {
    width: 20,
    height: 20,
    alignSelf: "center",
    tintColor: colors.primary,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  email: {
    fontSize: 13,
  },
  iconContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});
