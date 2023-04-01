import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import {
  FilledButtonComponent,
  OutlinedButtonComponent,
  TextInputComponent,
} from "../components";
import { colors } from "../constants";
import { useUserStore } from "../hooks";
import { AuthNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<AuthNavigatorParamList, "Register"> {}

export const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register } = useUserStore();

  const registerUser = async () => {
    setEmailError(undefined);
    setPasswordError(undefined);

    let isOk = false;

    if (!email) {
      setEmailError("Campo requerido");
    } else if (!/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("Ingrese un email valido");
    } else if (!password) {
      setPasswordError("Campo requerido");
    } else {
      isOk = true;
    }

    if (isOk) {
      setIsLoading(true);
      await register({ email, password });
      setIsLoading(false);
    }
  };

  const goToLogin = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/writing-pen.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WRITE ME</Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Registro de Usuarios</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInputComponent
            placeholder="usuario@email.com"
            label="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            error={emailError}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInputComponent
            placeholder="****"
            label="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            error={passwordError}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <FilledButtonComponent
              text="Registrar Usuario"
              onPress={registerUser}
              isLoading={isLoading}
            />
          </View>
          <View style={styles.buttonContainer}>
            <OutlinedButtonComponent
              text="¿Ya tienes una cuenta?"
              onPress={goToLogin}
              disabled={isLoading}
            />
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
  titleContainer: {
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 12,
  },
  title: {
    fontSize: 48,
    fontWeight: "900",
    color: colors.primary,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height: 100,
    tintColor: colors.primary,
  },
  subtitleContainer: {
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.secondary,
  },
  inputContainer: {
    width: "100%",
    paddingVertical: 6,
  },
  form: {
    width: "65%",
    alignSelf: "center",
    paddingTop: 18,
  },
  buttonContainer: {
    paddingVertical: 6,
  },
  buttonsContainer: {
    paddingTop: 16,
  },
});
