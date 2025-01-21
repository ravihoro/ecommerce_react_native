import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Theme } from "../utils/theme";
import { useContext } from "react";
import { UserContext } from "../store/user-context";
import ProfileOption from "../components/ProfileOption";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "../utils/route_types";
import { Routes } from "../utils/route_constants";

const ProfileScreen: React.FC = () => {
  const { user, removeUser } = useContext(UserContext);

  const { navigate } =
    useNavigation<HomeStackNavigationProps<typeof Routes.FAVORITE>>();

  const signOutAlert = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: removeUser,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user?.image }} style={styles.imageContainer} />
      <View style={styles.detailContainer}>
        <Text style={styles.nameTextStyle}>{user?.name}</Text>
        <Text style={styles.detailTextStyle}>{user?.email}</Text>
        <Text style={styles.detailTextStyle}>{user?.phone}</Text>
      </View>
      <ProfileOption text="Address" />
      <ProfileOption
        text="Wishlist"
        onPress={() => {
          navigate(Routes.FAVORITE);
        }}
      />
      <ProfileOption text="Payment" />
      <ProfileOption text="Help" />
      <ProfileOption text="Support" />

      <Pressable onPress={signOutAlert}>
        <Text style={styles.signOutTextStyle}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: Theme.spacing.m,
    justifyContent: "center",
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: Theme.spacing.m,
  },
  detailContainer: {
    backgroundColor: Theme.colors.greyBackground,
    padding: Theme.spacing.s,
    borderRadius: Theme.spacing.s,
    marginBottom: Theme.spacing.m,
  },
  nameTextStyle: {
    fontWeight: "bold",
  },
  detailTextStyle: {
    color: Theme.colors.greyText,
  },
  signOutTextStyle: {
    fontWeight: "bold",
    color: Theme.colors.failure,
    alignSelf: "center",
  },
});

export default ProfileScreen;
