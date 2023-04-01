import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Letter } from "../models";
import { LetterFormScreen, LetterDetailScreen, SentScreen } from "../screens";

export type SentNavigatorParamList = {
  Sent: undefined;
  LetterForm: Letter | undefined;
  LetterDetail: Letter;
};

const Stack = createNativeStackNavigator<SentNavigatorParamList>();

export const SentNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sent" component={SentScreen} />
      <Stack.Screen name="LetterForm" component={LetterFormScreen} />
      <Stack.Screen name="LetterDetail" component={LetterDetailScreen} />
    </Stack.Navigator>
  );
};
