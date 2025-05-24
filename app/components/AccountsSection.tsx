import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";

const AccountsSection = () => {
  return (
    <View className="bg-white rounde-full mt-5 p-2  rounded-lg shadow-slate-700">
      <View className="flex flex-row justify-between px-5">
        <Text className="font-bold text-base text-black">Accounts</Text>
        <Pressable>
          <FontAwesome name="arrow-right" color={"gray"} size={15} />
        </Pressable>
      </View>

      {/* section list account card and amount */}
      <View className="flex flex-row justify-between ">
        <View className="flex flex-row justify-between mt-5">
          <View className="flex flex-row gap-2 p-2 rounded-lg items-center ">
            <View className="rounded-xl bg-red-500 p-3">
              <FontAwesome5 name="wallet" size={20} />
            </View>
            <View className="flex flex-col">
              <Text className="text-sm">Account Bank</Text>
              <Text className="text-sm">Rp.4000.000</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row justify-between mt-5 px-5">
          <View className="flex flex-row gap-2 p-2 rounded-lg items-center ">
            <View className="rounded-xl bg-blue-500 p-3">
              <FontAwesome5 name="wallet" size={20} />
            </View>
            <View className="flex flex-col">
              <Text className="text-sm">Account Bank</Text>
              <Text className="text-sm">Rp.4000.000</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountsSection;
