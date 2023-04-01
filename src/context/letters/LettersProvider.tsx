import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useState, useContext } from "react";
import { Alert } from "react-native";

import { LettersContext, LettersStore } from "./LettersContext";
import { db } from "../../config";
import { Letter } from "../../models";
import { UserContext } from "../user/UserContext";

interface Props {
  children: JSX.Element;
}

export const LettersProvider = ({ children }: Props) => {
  const [receivedLetters, setReceivedLetters] = useState<Letter[]>([]);
  const [sentLetters, setSentLetters] = useState<Letter[]>([]);
  const { user } = useContext(UserContext);

  const getReceivedLetters: LettersStore["getReceivedLetters"] = async () => {
    try {
      const q = query(
        collection(db, "letters"),
        where("to", "==", user?.email)
      );

      const querySnapshot = await getDocs(q);

      const data: Letter[] = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...(doc.data() as any) });
      });

      setReceivedLetters(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Error al listar las cartas recibidas");
    }
  };

  const getSentLetters: LettersStore["getSentLetters"] = async () => {
    try {
      const q = query(
        collection(db, "letters"),
        where("from", "==", user?.email)
      );

      const querySnapshot = await getDocs(q);

      const data: Letter[] = [];

      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...(doc.data() as any) });
      });

      setSentLetters(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Error al listar las cartas enviadas");
    }
  };

  const sendLetter: LettersStore["sendLetter"] = async (letter) => {
    try {
      const newLetter = letter;
      newLetter.date = Timestamp.fromDate(new Date());
      newLetter.from = user?.email || "";
      const docRef = await addDoc(collection(db, "letters"), newLetter);
      newLetter.id = docRef.id;

      setSentLetters((prev) => [...prev, newLetter]);
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Error al enviar la carta");
    }
  };

  const updateLetter: LettersStore["updateLetter"] = async (letter) => {
    try {
      const { id, title, to, message } = letter;

      const newLetters = sentLetters.map((item) => {
        if (item.id === id) {
          item.title = title;
          item.to = to;
          item.message = message;
        }

        return item;
      });

      setSentLetters(newLetters);

      const docRef = doc(db, "letters", id);

      await updateDoc(docRef, {
        title,
        to,
        message,
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Error al actualizar la carta");
    }
  };

  const deleteLetter: LettersStore["deleteLetter"] = async (id) => {
    try {
      const newLetters = sentLetters.filter((letter) => letter.id !== id);
      setSentLetters(newLetters);
      await deleteDoc(doc(db, "letters", id));
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Error al eliminar la carta");
    }
  };

  const store: LettersStore = {
    receivedLetters,
    sentLetters,
    getReceivedLetters,
    getSentLetters,
    sendLetter,
    updateLetter,
    deleteLetter,
  };

  return (
    <LettersContext.Provider value={store}>{children}</LettersContext.Provider>
  );
};
