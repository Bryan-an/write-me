import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { FriendsProvider, LettersProvider, UserProvider } from "./src/context";
import { AuthNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <UserProvider>
        <LettersProvider>
          <FriendsProvider>
            <AuthNavigator />
          </FriendsProvider>
        </LettersProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
