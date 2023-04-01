import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { FilledButtonComponent } from "../components";
import { colors } from "../constants";
import { useLettersStore, useUserStore } from "../hooks";

export const ProfileScreen = () => {
  const { user, logOut } = useUserStore();
  const { receivedLetters, sentLetters } = useLettersStore();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.emailCard}>
          <View style={styles.iconContainer}>
            <Ionicons name="person-circle" size={100} color={colors.primary} />
          </View>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.infoContainer}>
            <Text style={styles.key}>Recibidas</Text>
            <Text style={styles.value}>{receivedLetters.length}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.key}>Enviadas</Text>
            <Text style={styles.value}>{sentLetters.length}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <FilledButtonComponent text="Cerrar Sesión" onPress={logOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  card: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 16,
    width: "100%",
  },
  emailCard: {
    borderRadius: 4,
    backgroundColor: "#fce6e8",
    elevation: 4,
    width: "100%",
    padding: 16,
    alignItems: "center",
  },
  iconContainer: {
    alignItems: "center",
    paddingBottom: 12,
  },
  email: {
    color: "black",
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
  info: {
    paddingTop: 20,
    flexDirection: "row",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  key: {
    fontSize: 15,
    fontWeight: "bold",
  },
  value: {
    fontSize: 14,
    paddingTop: 8,
  },
  buttonContainer: {
    paddingVertical: 32,
  },
});
