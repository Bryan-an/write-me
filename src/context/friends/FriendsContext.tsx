import { createContext } from "react";

import { Friend } from "../../models";

export interface FriendsStore {
  friends: Friend[];
  getFriends: () => Promise<void>;
}

export const FriendsContext = createContext<FriendsStore>({} as FriendsStore);
