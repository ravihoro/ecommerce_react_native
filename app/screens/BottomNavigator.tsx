import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import { Routes } from "../utils/route_constants";
import HomeScreen from "./HomeScreen";
import NotificationScreen from "./NotificationScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { Theme } from "../utils/theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BottomTab = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          header: ({ navigation, route, options }) => <></>,
          tabBarActiveTintColor: Theme.colors.primary,
        }}
      >
        <BottomTab.Screen
          name={Routes.HOME_BOTTOM_TAB}
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name={Routes.NOTIFICATION_BOTTOM_TAB}
          component={NotificationScreen}
          options={{
            tabBarLabel: "Notification",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="notifications" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name={Routes.CART_BOTTOM_TAB}
          component={CartScreen}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <BottomTab.Screen
          name={Routes.PROFILE_BOTTOM_TAB}
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person" size={size} color={color} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;
