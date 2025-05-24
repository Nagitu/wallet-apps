import React from "react";
import { FlatList, Text, View } from "react-native";

const ExpensesSection = () => {
  const DATA = Array.from({ length: 10 }, (_, index) => ({
    id: index.toString(),
    title: "🍔 Makan Siang",
    price: "Rp 45.000",
  }));
  return (
    <View
      className="h-72 border-[0.5px] border-gray-500 rounded-lg w-full bg-white shadow px-5 py-2"
      style={{
        shadowOffset: { width: 0, height: 10 },
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
      }}
    >
      <Text className="text-lg font-bold  text-blue-500 ">ExpensesSection</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-3 rounded-md shadow-sm mb-2">
            <Text className="font-semibold text-gray-800">{item.title}</Text>
            <Text className="text-gray-600">{item.price}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 16 }}
        style={{ maxHeight: 224 }} // h-56
      />
    </View>
  );
};

export default ExpensesSection;
