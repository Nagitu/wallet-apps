import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "white",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#B0DB9C",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex flex-col items-center justify-center w-10 mt-2">
              <FontAwesome
                name="home"
                size={24}
                color={focused ? "#FE5D26" : "#F2C078"}
              />

              <Text style={{ fontSize: 6, color: "#FE5D26", marginTop: 1 }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          headerShown: false,
          title: "Categories",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex flex-col items-center justify-center w-10 mt-2">
              <FontAwesome
                name="circle-o"
                size={24}
                color={focused ? "#FE5D26" : "#F2C078"}
              />

              <Text style={{ fontSize: 6, color: "#FE5D26", marginTop: 1 }}>
                Categories
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex flex-col items-center justify-center w-10 mt-2">
              <FontAwesome
                name="bar-chart-o"
                size={24}
                color={focused ? "#FE5D26" : "#F2C078"}
              />

              <Text style={{ fontSize: 6, color: "#FE5D26", marginTop: 1 }}>
                Analytics
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          headerShown: false,
          title: "Transactions",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex flex-col items-center justify-center w-10 mt-2 ">
              <FontAwesome
                name="list"
                size={24}
                color={focused ? "#FE5D26" : "#F2C078"}
              />

              <Text style={{ fontSize: 6, color: "#FE5D26", marginTop: 1 }}>
                Transactions
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
