import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import {
  FilledButtonComponent,
  OutlinedButtonComponent,
  TextInputComponent,
} from "../components";
import { useLettersStore } from "../hooks";
import { Letter } from "../models";
import { SentNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<SentNavigatorParamList, "LetterForm"> {}

export const LetterFormScreen: React.FC<Props> = ({ navigation, route }) => {
  const letter = route.params;

  const [title, setTitle] = useState<string>(letter?.title || "");
  const [to, setTo] = useState<string>(letter?.to || "");
  const [message, setMessage] = useState<string>(letter?.message || "");
  const { sendLetter, updateLetter } = useLettersStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const send = async () => {
    setIsLoading(true);
    await sendLetter({ title, to, message } as Letter);
    setIsLoading(false);
    navigation.pop();
  };

  const update = async () => {
    setIsLoading(true);
    await updateLetter({ id: letter?.id, title, to, message } as Letter);
    setIsLoading(false);
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInputComponent
            label="Asunto"
            placeholder="Feliz cumpleaños!"
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInputComponent
            label="Para"
            placeholder="amigo@email.com"
            autoCapitalize="none"
            value={to}
            onChangeText={setTo}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInputComponent
            label="Mensaje"
            placeholder="Te deseo un feliz cumpleaños"
            numberOfLines={10}
            value={message}
            onChangeText={setMessage}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <OutlinedButtonComponent
              text="Cancelar"
              onPress={() => navigation.pop()}
              disabled={isLoading}
            />
          </View>
          <View style={{ width: 12 }} />
          <View style={styles.buttonContainer}>
            {letter ? (
              <FilledButtonComponent
                text="Actualizar"
                onPress={update}
                isLoading={isLoading}
              />
            ) : (
              <FilledButtonComponent
                text="Enviar"
                onPress={send}
                isLoading={isLoading}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  form: {
    width: "75%",
    alignSelf: "center",
    paddingVertical: 16,
  },
  inputContainer: {
    paddingVertical: 6,
  },
  buttonsContainer: {
    paddingTop: 24,
    flexDirection: "row",
  },
  buttonContainer: {
    paddingVertical: 6,
    flex: 1,
  },
});
