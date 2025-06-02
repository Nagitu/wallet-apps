import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import accounts from "../../assets/data/accounts.json";

const AccountsSection = () => {
  return (
    <View className="bg-white rounde-full mt-5 p-2  rounded-lg shadow-slate-700">
      <View className="flex flex-row justify-between px-5">
        <Text className="font-bold text-base text-black">Accounts</Text>
        <Pressable>
          <FontAwesome name="arrow-right" color={"gray"} size={15} />
        </Pressable>
      </View>

      <FlatList
        data={accounts}
        renderItem={({ item }) => (
          <View className="flex flex-row items-center gap-2 p-2 mt-5 rounded-lg bg-white">
            <View className="rounded-xl bg-red-500 p-3">
              <FontAwesome5 name="wallet" size={20} color="white" />
            </View>
            <View className="flex flex-col">
              <Text className="text-sm font-medium">{item.name}</Text>
              <Text className="text-sm text-gray-600">
                Rp.{item.balance.toLocaleString()}
              </Text>
            </View>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 10,
          justifyContent: "space-between",
          flexDirection: "row",
          gap: 10,
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default AccountsSection;
