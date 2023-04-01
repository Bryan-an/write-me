import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { LettersProvider, UserProvider } from "./src/context";
import { AuthNavigator } from "./src/navigation";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <LettersProvider>
          <AuthNavigator />
        </LettersProvider>
      </NavigationContainer>
    </UserProvider>
  );
}
