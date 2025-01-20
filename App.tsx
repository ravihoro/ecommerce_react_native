import { UserContextProvider } from "./app/store/user-context";
import AppScreen from "./app/screens/AppScreen";

export default function App() {
  return (
    <UserContextProvider>
      <AppScreen />
    </UserContextProvider>
  );
}
