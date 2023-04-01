import { useState } from "react";

import { LettersContext, LettersStore } from "./LettersContext";
import letters from "../../mocks/letters.json";
import { Letter } from "../../models";

interface Props {
  children: JSX.Element;
}

export const LettersProvider = ({ children }: Props) => {
  const [receivedLetters, setReceivedLetters] = useState<Letter[]>(
    letters as any
  );
  const [sentLetters, setSentLetters] = useState<Letter[]>(letters as any);

  const store: LettersStore = {
    receivedLetters,
    sentLetters,
  };

  return (
    <LettersContext.Provider value={store}>{children}</LettersContext.Provider>
  );
};
