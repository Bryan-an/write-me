import { createContext } from "react";

import { Letter } from "../../models";

export interface LettersStore {
  receivedLetters: Letter[];
  sentLetters: Letter[];
  getReceivedLetters: () => Promise<void>;
  getSentLetters: () => Promise<void>;
  sendLetter: (letter: Letter) => Promise<void>;
  updateLetter: (letter: Letter) => Promise<void>;
  deleteLetter: (id: Letter["id"]) => Promise<void>;
}

export const LettersContext = createContext<LettersStore>({} as LettersStore);
