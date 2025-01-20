import React from "react";
import ListHeader from "./ListHeader";
import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import { CATEGORY_IMAGES } from "../utils/constants";
import { toTitleCase } from "../utils/helper_functions";

type HorizontalCategoryListProps = {
  categories: string[];
};

const HorizontalCategoryList: React.FC<HorizontalCategoryListProps> = ({
  categories,
}) => {
  return (
    <>
      <ListHeader text="Categories" />
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <CategoryItem
            imageUrl={CATEGORY_IMAGES[index]}
            text={toTitleCase(item)}
          />
        )}
      />
    </>
  );
};

export default HorizontalCategoryList;
