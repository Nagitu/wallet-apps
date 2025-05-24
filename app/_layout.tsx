import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "./global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack screenOptions={{ headerShown: false }} initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="search" />
        {/* <Stack.Screen name="(pokemon)" /> */}
        {/* <Stack.Screen name="movie/[id]" /> */}
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}
