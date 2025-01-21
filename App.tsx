import { UserContextProvider } from "./app/store/user-context";
import AppScreen from "./app/screens/AppScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "./app/utils/theme";
import { FavoritesContextProvider } from "./app/store/favorites-context";

export default function App() {
  return (
    <UserContextProvider>
      <FavoritesContextProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: Theme.colors.background }}
        >
          <AppScreen />
        </SafeAreaView>
      </FavoritesContextProvider>
    </UserContextProvider>
  );
}
