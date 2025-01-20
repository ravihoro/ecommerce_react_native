import { Image, StyleSheet, Text, View } from "react-native";
import { Theme } from "../utils/theme";

type CategoryItemProps = {
  imageUrl: string;
  text: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ imageUrl, text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          height={60}
          width={60}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: Theme.spacing.m,
    width: 60,
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: Theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Theme.colors.primary,
  },
  imageStyle: {
    borderRadius: 20,
    resizeMode: "contain",
  },
  textStyle: {
    textAlign: "center",
    fontSize: Theme.fontSize.s,
  },
});

export default CategoryItem;
