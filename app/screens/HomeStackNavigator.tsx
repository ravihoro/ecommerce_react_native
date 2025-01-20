import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Routes } from "../utils/route_constants";
import HomeScreen from "./HomeScreen";
import AllCategoriesScreen from "./AllCategoriesScreen";
import { View } from "react-native";
import AppBar from "../components/AppBar";

const Stack = createNativeStackNavigator();

const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.HOME}
      screenOptions={({ navigation, route }) => {
        if (route.name === Routes.HOME) {
          return {
            header: () => <View></View>,
          };
        } else {
          return {
            header: () => (
              <AppBar
                route={route}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
          };
        }
      }}
    >
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Screen
        name={Routes.ALL_CATEGORIES}
        component={AllCategoriesScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
