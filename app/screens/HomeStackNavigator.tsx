import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useLayoutEffect } from "react";
import { Routes } from "../utils/route_constants";
import HomeScreen from "./HomeScreen";
import AllCategoriesScreen from "./AllCategoriesScreen";
import { View } from "react-native";
import AppBar from "../components/AppBar";
import ProductsScreen from "./ProductsScreen";
import ProductDetailScreen from "./ProductDetailScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import FavoritesScreen from "./FavoritesScreen";
import { BottomTabParams, BottomTabRouteProp } from "../utils/route_types";
import ProfileScreen from "./ProfileScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator: React.FC = () => {
  const route = useRoute<BottomTabRouteProp<keyof BottomTabParams>>();

  const initialRouteName =
    route.params == null ? Routes.HOME : route.params!.initialRouteName;

  console.log("initial route name: ", initialRouteName);

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
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
      <Stack.Screen name={Routes.PRODUCTS} component={ProductsScreen} />
      <Stack.Screen
        name={Routes.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
      <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
      <Stack.Screen name={Routes.FAVORITE} component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
