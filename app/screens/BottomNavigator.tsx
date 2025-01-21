import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { Routes } from "../utils/route_constants";
import HomeScreen from "./HomeScreen";
import NotificationScreen from "./NotificationScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useContext } from "react";
import { Theme } from "../utils/theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeStackNavigator from "./HomeStackNavigator";
import { Ionicons } from "@expo/vector-icons";
import { CartContext } from "../store/cart-context";

const BottomTab = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {
  const { getQuantity } = useContext(CartContext);

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
          component={HomeStackNavigator}
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
              <View>
                <Ionicons name="cart-outline" color={color} size={size} />
                {getQuantity() > 0 && (
                  <Text
                    style={{
                      position: "absolute",
                      right: -5,
                      paddingVertical: 2,
                      paddingHorizontal: 5,
                      backgroundColor: Theme.colors.primary,
                      borderRadius: 20,
                      color: Theme.colors.background,
                      fontSize: Theme.fontSize.xs,
                    }}
                  >
                    {getQuantity()}
                  </Text>
                )}
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name={Routes.PROFILE_BOTTOM_TAB}
          initialParams={{ initialRouteName: Routes.PROFILE }}
          component={HomeStackNavigator}
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
