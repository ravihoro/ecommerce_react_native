import { useContext } from "react";
import { UserContext } from "../store/user-context";
import { Text } from "react-native";

const AppScreen: React.FC = () => {
  const { user } = useContext(UserContext);
  return user ? <Text>User available</Text> : <Text>User Not Available</Text>;
};

export default AppScreen;
