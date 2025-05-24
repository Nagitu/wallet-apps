import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { WalletCard } from "./WalletCard";

const ListWalletSection = () => {
  return (
    <View className="flex flex-col gap-4 rounded-lg w-full bg-white shadow border-b-[0.5px] border-gray-500 mb-5">
      <Text className="font-bold text-xl text-blue-900">List Wallet</Text>
      <ScrollView
        style={{ maxHeight: 160 }}
        contentContainerStyle={{ padding: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between">
          {Array.from({ length: 4 }).map((_, index) => (
            <WalletCard amount={1000} key={index} walletName="mandiri" />
          ))}
          <Pressable
            className="bg-stone-400 w-[48%] min-h-10 p-4 rounded-xl mb-4"
            onPress={() => {
              alert("success");
            }}
          >
            <Text className="text-white font-bold">Add Button</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ListWalletSection;
