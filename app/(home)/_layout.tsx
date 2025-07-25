import { Stack } from "expo-router";
import Colors from "../../constants/Colors";
import { useColorScheme } from "react-native";
import Logo from "../../components/Logo";

export default function HomeLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme ? Colors[colorScheme] : Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.stackBackgroundColor }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerLeft: () => <Logo />
        }}
      />
    </Stack>
  );
}
