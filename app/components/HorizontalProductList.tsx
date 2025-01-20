import { FlatList, View } from "react-native";
import { Product } from "../model/product";
import ListHeader from "./ListHeader";
import { Theme } from "../utils/theme";
import ProductItem from "./ProductItem";

type HorizontalProductListProps = {
  products: Product[];
  text: string;
  onPress: () => void;
};

const HorizontalProductList: React.FC<HorizontalProductListProps> = ({
  products,
  text,
  onPress,
}) => {
  return (
    <View>
      <ListHeader text={text} onPress={onPress} />
      <FlatList
        horizontal
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <ProductItem product={item} />}
        contentContainerStyle={{ gap: Theme.spacing.s }}
      />
    </View>
  );
};

export default HorizontalProductList;
