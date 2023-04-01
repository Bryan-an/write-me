import { createContext } from "react";

import { Letter } from "../../models";

export interface LettersStore {
  receivedLetters: Letter[];
  sentLetters: Letter[];
}

export const LettersContext = createContext<LettersStore>({} as LettersStore);
