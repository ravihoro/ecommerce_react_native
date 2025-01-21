import React from "react";
import { Product } from "../model/product";
import { FlatList } from "react-native";
import ProductItem from "./ProductItem";
import { Theme } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "../utils/route_types";
import { Routes } from "../utils/route_constants";

type ProductFlatListProp = {
  products: Product[];
};

const ProductFlatList: React.FC<ProductFlatListProp> = ({ products }) => {
  const { navigate } =
    useNavigation<HomeStackNavigationProps<typeof Routes.PRODUCT_DETAIL>>();

  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item, index }) => (
        <ProductItem
          product={item}
          onPress={() => {
            navigate(Routes.PRODUCT_DETAIL, { product: item });
          }}
        />
      )}
      contentContainerStyle={{ rowGap: Theme.spacing.s }}
      columnWrapperStyle={{ gap: Theme.spacing.s }}
      numColumns={2}
    />
  );
};

export default ProductFlatList;
