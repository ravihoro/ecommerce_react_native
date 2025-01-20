import { Pressable, StyleSheet, View } from "react-native";
import { Theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";

type BackButtonProps = {
  onPress: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name="chevron-back" size={18} color="black" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    backgroundColor: Theme.colors.greyBackground,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BackButton;
