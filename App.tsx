import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { UserProvider } from "./src/context";
import { AuthNavigator } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <UserProvider>
        <AuthNavigator />
      </UserProvider>
    </NavigationContainer>
  );
}
