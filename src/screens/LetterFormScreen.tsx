import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";

import {
  FilledButtonComponent,
  OutlinedButtonComponent,
  TextInputComponent,
} from "../components";
import { ReceivedNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<ReceivedNavigatorParamList, "LetterForm"> {}

export const LetterFormScreen: React.FC<Props> = ({ navigation }) => {
  const sendLetter = () => {
    console.log("send letter");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInputComponent label="Asunto" placeholder="Feliz cumpleaños!" />
        </View>
        <View style={styles.inputContainer}>
          <TextInputComponent
            label="Para"
            placeholder="amigo@email.com"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInputComponent
            label="Mensaje"
            placeholder="Te deseo un feliz cumpleaños"
            numberOfLines={10}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <OutlinedButtonComponent
              text="Cancelar"
              onPress={() => navigation.pop()}
            />
          </View>
          <View style={{ width: 12 }} />
          <View style={styles.buttonContainer}>
            <FilledButtonComponent text="Enviar" onPress={sendLetter} />
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
