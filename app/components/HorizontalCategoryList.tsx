import React from "react";
import ListHeader from "./ListHeader";
import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import { CATEGORY_IMAGES } from "../utils/constants";
import { toTitleCase } from "../utils/helper_functions";
import { useNavigation } from "@react-navigation/native";
import {
  HomeStackNavigationProps,
  HomeStackParams,
} from "../utils/route_types";
import { Routes } from "../utils/route_constants";

type HorizontalCategoryListProps = {
  categories: string[];
};

const HorizontalCategoryList: React.FC<HorizontalCategoryListProps> = ({
  categories,
}) => {
  const navigation =
    useNavigation<HomeStackNavigationProps<typeof Routes.PRODUCTS>>();

  const onPressHandler = () => {
    navigation.navigate(Routes.ALL_CATEGORIES, { categories: categories });
  };

  return (
    <>
      <ListHeader text="Categories" onPress={onPressHandler} />
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <CategoryItem
            imageUrl={CATEGORY_IMAGES[index]}
            text={toTitleCase(item)}
            onPress={() => {
              navigation.navigate(Routes.PRODUCTS, { category: item });
            }}
          />
        )}
      />
    </>
  );
};

export default HorizontalCategoryList;
