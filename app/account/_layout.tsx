import { Stack } from "expo-router";
import Colors from "../../constants/Colors";
import { useColorScheme } from "react-native";

export default function AccountLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ? Colors[colorScheme] : Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.stackBackgroundColor },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "white"
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Account"
        }}
      />
    </Stack>
  );
}
