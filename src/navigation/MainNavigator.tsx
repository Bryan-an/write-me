import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ReceivedNavigator } from "./ReceivedNavigator";
import { SentNavigator } from "./SentNavigator";
import { HomeHeaderComponent } from "../components";
import { colors } from "../constants";
import { FriendsScreen, ProfileScreen } from "../screens";

export type MainNavigatorParamList = {
  ReceivedNavigator: undefined;
  SentNavigator: undefined;
  Friends: undefined;
  Profile: undefined;
};

const BottomTab = createBottomTabNavigator<MainNavigatorParamList>();

export const MainNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ReceivedNavigator") {
            iconName = focused ? "mail" : "mail-outline";
          } else if (route.name === "SentNavigator") {
            iconName = focused ? "archive" : "archive-outline";
          } else if (route.name === "Friends") {
            iconName = focused ? "people" : "people-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <Ionicons
              name={iconName as any}
              size={size}
              color={colors.primary}
            />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.primary,
        tabBarStyle: { paddingBottom: 8, height: 58, paddingTop: 4 },
        header: () => <HomeHeaderComponent />,
      })}
    >
      <BottomTab.Screen
        name="ReceivedNavigator"
        component={ReceivedNavigator}
        options={{ tabBarLabel: "Recibidas" }}
      />
      <BottomTab.Screen
        name="SentNavigator"
        component={SentNavigator}
        options={{ tabBarLabel: "Enviadas" }}
      />
      <BottomTab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{ tabBarLabel: "Amigos" }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: "Perfil" }}
      />
    </BottomTab.Navigator>
  );
};
