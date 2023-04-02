import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { colors } from "../constants";
import { Friend } from "../models";

interface Props {
  friend: Friend;
}

export const FriendCardComponent: React.FC<Props> = ({
  friend: { picture, name, gender, email, phone },
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.pictureContainer}>
        <Image
          source={{ uri: picture.thumbnail }}
          style={styles.picture}
          resizeMode="contain"
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {name.title} {name.first} {name.last}
        </Text>
        <View style={styles.infoSection}>
          <View style={{ width: 15 }}>
            <FontAwesome name="envelope" size={15} color="orange" />
          </View>
          <Text style={styles.infoText}>{email}</Text>
        </View>
        <View style={styles.infoSection}>
          <View style={{ width: 15 }}>
            <FontAwesome name="phone" size={15} color="limegreen" />
          </View>
          <Text style={styles.infoText}>{phone}</Text>
        </View>
      </View>
      <View style={styles.genderContainer}>
        {gender === "male" ? (
          <FontAwesome name="male" size={30} color="deepskyblue" />
        ) : (
          <FontAwesome name="female" size={30} color="deeppink" />
        )}
      </View>
    </View>
  );
};

export default FriendCardComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 16,
    flexDirection: "row",
    elevation: 4,
  },
  pictureContainer: {
    paddingEnd: 16,
    justifyContent: "center",
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  genderContainer: {
    padding: 8,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoText: {
    paddingStart: 5,
  },
});
