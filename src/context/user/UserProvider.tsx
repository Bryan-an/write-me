import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { Alert } from "react-native";

import { UserContext, UserStore } from "./UserContext";
import { auth } from "../../config";

interface Props {
  children: JSX.Element;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logIn: UserStore["logIn"] = async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      setUser(user);
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    }
  };

  const register: UserStore["register"] = async ({ email, password }) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(user);
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    }
  };

  const logOut: UserStore["logOut"] = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      Alert.alert("Error", (error as any).message);
    }
  };

  const store: UserStore = {
    isAuthenticated,
    user,
    logIn,
    register,
    logOut,
  };

  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
