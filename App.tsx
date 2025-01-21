import { UserContextProvider } from "./app/store/user-context";
import AppScreen from "./app/screens/AppScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "./app/utils/theme";
import { FavoritesContextProvider } from "./app/store/favorites-context";
import { CartContextProvider } from "./app/store/cart-context";

export default function App() {
  return (
    <UserContextProvider>
      <FavoritesContextProvider>
        <CartContextProvider>
          <SafeAreaView
            style={{ flex: 1, backgroundColor: Theme.colors.background }}
          >
            <AppScreen />
          </SafeAreaView>
        </CartContextProvider>
      </FavoritesContextProvider>
    </UserContextProvider>
  );
}
