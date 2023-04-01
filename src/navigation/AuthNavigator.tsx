import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MainNavigator } from "./MainNavigator";
import { useUserStore } from "../hooks";
import { HomeScreen, LoginScreen, RegisterScreen } from "../screens";

export type AuthNavigatorParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

export const AuthNavigator = () => {
  const { isAuthenticated } = useUserStore();

  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      {isAuthenticated ? (
        <Stack.Screen
          name="Home"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: "" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
