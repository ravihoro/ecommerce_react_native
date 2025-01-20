import { useContext } from "react";
import { UserContext } from "../store/user-context";
import { Text } from "react-native";
import BottomNavigator from "./BottomNavigator";
import SignInScreen from "./SignInScreen";

const AppScreen: React.FC = () => {
  const { user } = useContext(UserContext);
  return !user ? <BottomNavigator /> : <SignInScreen />;
};

export default AppScreen;
