import { useState } from "react";
import { Alert } from "react-native";

import { FriendsContext, FriendsStore } from "./FriendsContext";
import { Friend } from "../../models";
import { friendsService } from "../../services";

interface Props {
  children: JSX.Element;
}

export const FriendsProvider: React.FC<Props> = ({ children }) => {
  const [friends, setFriends] = useState<Friend[]>([]);

  const getFriends: FriendsStore["getFriends"] = async () => {
    try {
      const { data } = await friendsService.list();
      setFriends(data.results);
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    }
  };

  const store: FriendsStore = {
    friends,
    getFriends,
  };

  return (
    <FriendsContext.Provider value={store}>{children}</FriendsContext.Provider>
  );
};
