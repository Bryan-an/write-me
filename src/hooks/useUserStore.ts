import { useContext } from "react";

import { UserContext } from "../context";

export const useUserStore = () => useContext(UserContext);
