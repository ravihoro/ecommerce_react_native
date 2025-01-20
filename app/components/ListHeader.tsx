import { StyleSheet, Text, TextStyle, View } from "react-native";
import { Theme } from "../utils/theme";
import SeeAllButton from "./SeeAllButton";

type ListHeaderProps = {
  text: string;
  onPress?: () => {};
};

const ListHeader: React.FC<ListHeaderProps> = ({ text, onPress }) => {
  return (
    <View style={styles.headerStyle}>
      <Text
        style={[Theme.textVariants.subHeaderBold as TextStyle, { flex: 1 }]}
      >
        {text}
      </Text>
      <SeeAllButton onPress={onPress!} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Theme.spacing.s,
  },
});

export default ListHeader;
