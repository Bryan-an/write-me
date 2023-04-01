import { useContext } from "react";

import { LettersContext } from "../context";

export const useLettersStore = () => useContext(LettersContext);
