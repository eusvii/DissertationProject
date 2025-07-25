import { Tabs } from "expo-router";
import "./global.css";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useColorScheme as useReactNativeColorScheme } from "react-native";
import { useColorScheme as useNativeWindColorScheme } from "nativewind";

export default function RootLayout() {
  useNativeWindColorScheme();

  const colorScheme = useReactNativeColorScheme();
  const theme = colorScheme ? Colors[colorScheme] : Colors.light;
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.tabBarIconActive,
          tabBarInactiveTintColor: theme.tabBarIconInActive,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.tabBarBackground,
            borderTopColor: theme.tabTopBorderColor
          }
        }}
      >
        <Tabs.Screen
          name="(home)"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={26} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="myforms"
          options={{
            title: "My Forms",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="file" size={20} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={26} color={color} />
            )
          }}
        />
      </Tabs>
    </>
  );
}
