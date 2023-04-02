import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";

import { EmptyComponent, FriendCardComponent } from "../components";
import { colors } from "../constants";
import { useFriendsStore } from "../hooks";
import { Friend } from "../models";

const Separator = () => <View style={{ height: 8 }} />;

export const FriendsScreen = () => {
  const { friends, getFriends } = useFriendsStore();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const renderItem = ({ item }: { item: Friend }) => {
    return <FriendCardComponent friend={item} />;
  };

  useEffect(() => {
    const getData = async () => {
      await getFriends();
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ height: 16 }} />
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={friends}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item.id.name + (item.id.value ?? "") + index
          }
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={Separator}
          ListEmptyComponent={<EmptyComponent text="Aún no tiene amigos" />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  list: {
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
});
