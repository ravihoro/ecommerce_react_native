import { useContext } from "react";
import { UserContext } from "../store/user-context";
import { Text } from "react-native";
import BottomNavigator from "./BottomNavigator";

const AppScreen: React.FC = () => {
  const { user } = useContext(UserContext);
  return <BottomNavigator />;
};

export default AppScreen;
