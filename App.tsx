import { UserContextProvider } from "./app/store/user-context";
import AppScreen from "./app/screens/AppScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "./app/utils/theme";

export default function App() {
  return (
    <UserContextProvider>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: Theme.colors.background }}
      >
        <AppScreen />
      </SafeAreaView>
    </UserContextProvider>
  );
}
