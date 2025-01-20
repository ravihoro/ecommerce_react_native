import React from "react";
import { Product } from "../model/product";
import { FlatList } from "react-native";
import ProductItem from "./ProductItem";
import { Theme } from "../utils/theme";

type ProductFlatListProp = {
  products: Product[];
};

const ProductFlatList: React.FC<ProductFlatListProp> = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item, index }) => <ProductItem product={item} />}
      contentContainerStyle={{ rowGap: Theme.spacing.s }}
      columnWrapperStyle={{ gap: Theme.spacing.s }}
      numColumns={2}
    />
  );
};

export default ProductFlatList;
