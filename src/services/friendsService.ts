import axios from "axios";

import { Pokedex } from "../models";

export const friendsService = {
  list: async () => axios.get<Pokedex>("https://randomuser.me/api/?results=10"),
};
