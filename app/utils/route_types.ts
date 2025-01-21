import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "./route_constants";
import { RouteProp } from "@react-navigation/native";
import { Product } from "../model/product";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type HomeStackParams = {
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.ALL_CATEGORIES]: { categories: string[] };
  [Routes.PRODUCTS]: { category: string };
  [Routes.PRODUCT_DETAIL]: { product: Product };
  [Routes.FAVORITE]: undefined;
};

export type HomeStackNavigationProps<T extends keyof HomeStackParams> =
  NativeStackNavigationProp<HomeStackParams, T>;

export type HomeStackRouteProp<T extends keyof HomeStackParams> = RouteProp<
  HomeStackParams,
  T
>;

export type BottomTabParams = {
  [Routes.HOME_BOTTOM_TAB]: undefined;
  [Routes.NOTIFICATION_BOTTOM_TAB]: undefined;
  [Routes.CART_BOTTOM_TAB]: undefined;
  [Routes.PROFILE_BOTTOM_TAB]: { initialRouteName: string };
};

export type BottomTabNavigationProps<T extends keyof BottomTabParams> =
  BottomTabNavigationProp<BottomTabParams, T>;

export type BottomTabRouteProp<T extends keyof BottomTabParams> = RouteProp<
  BottomTabParams,
  T
>;
