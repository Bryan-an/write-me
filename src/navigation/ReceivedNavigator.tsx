import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Letter } from "../models";
import { ReceivedScreen, LetterDetailScreen } from "../screens";

export type ReceivedNavigatorParamList = {
  Received: undefined;
  LetterDetail: Letter;
};

const Stack = createNativeStackNavigator<ReceivedNavigatorParamList>();

export const ReceivedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Received" component={ReceivedScreen} />
      <Stack.Screen name="LetterDetail" component={LetterDetailScreen} />
    </Stack.Navigator>
  );
};
