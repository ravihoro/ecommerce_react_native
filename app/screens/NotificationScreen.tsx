import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../utils/theme";

const NotificationScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Theme.colors.background,
  },
});

export default NotificationScreen;
