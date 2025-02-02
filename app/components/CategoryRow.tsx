import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../utils/theme";

type CategoryRowProps = {
  imageUrl: string;
  text: string;
  onPress: () => void;
};

const CategoryRow: React.FC<CategoryRowProps> = ({
  imageUrl,
  text,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.imageContainer} />
        <Text>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: Theme.colors.greyBackground,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: "center",
  },
  imageContainer: {
    marginRight: 15,
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Theme.colors.primary,
  },
});

export default CategoryRow;
