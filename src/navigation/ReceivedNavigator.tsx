import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ReceivedScreen, LetterFormScreen } from "../screens";

export type ReceivedNavigatorParamList = {
  Received: undefined;
  LetterForm: undefined;
};

const Stack = createNativeStackNavigator<ReceivedNavigatorParamList>();

export const ReceivedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Received" component={ReceivedScreen} />
      <Stack.Screen name="LetterForm" component={LetterFormScreen} />
    </Stack.Navigator>
  );
};
