import { useContext } from "react";

import { FriendsContext } from "../context";

export const useFriendsStore = () => useContext(FriendsContext);
