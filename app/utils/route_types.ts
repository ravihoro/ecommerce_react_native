import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "./route_constants";
import { RouteProp } from "@react-navigation/native";
import { Product } from "../model/product";

export type HomeStackParams = {
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: undefined;
  [Routes.ALL_CATEGORIES]: { categories: string[] };
  [Routes.PRODUCTS]: { category: string };
  [Routes.PRODUCT_DETAIL]: { product: Product };
};

export type HomeStackNavigationProps<T extends keyof HomeStackParams> =
  NativeStackNavigationProp<HomeStackParams, T>;

export type HomeStackRouteProp<T extends keyof HomeStackParams> = RouteProp<
  HomeStackParams,
  T
>;
