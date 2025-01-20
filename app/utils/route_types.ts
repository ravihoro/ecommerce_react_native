import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "./route_constants";
import { RouteProp } from "@react-navigation/native";

export type HomeStackParams = {
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: undefined;
};

export type HomeStackNavigationProps<T extends keyof HomeStackParams> =
  NativeStackNavigationProp<HomeStackParams, T>;

export type HomeStackRouteProp<T extends keyof HomeStackParams> = RouteProp<
  HomeStackParams,
  T
>;
