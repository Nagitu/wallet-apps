import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import transactions from "../../assets/data/transactions.json";

const CashFlowSection = () => {
  const thisMonth = new Date("2025-05-01"); // target: Mei 2025

  const filtered = transactions.filter((tx) => {
    const date = new Date(tx.createdAt);
    return (
      date.getMonth() === thisMonth.getMonth() &&
      date.getFullYear() === thisMonth.getFullYear()
    );
  });

  const totalIncome = filtered
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.value, 0);

  const totalExpense = filtered
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.value, 0);

  const format = (num: number) =>
    `Rp ${num.toLocaleString("id-ID", { minimumFractionDigits: 0 })}`;
  return (
    // <View className="bg-white rounde-full mt-5 p-5  rounded-lg shadow-slate-700">
    //   {/* heading card */}
    //   <View className="flex flex-row justify-between px-5">
    //     <View className="flex flex-col gap-2">
    //       <Text className="font-bold text-base text-black">Cash flow</Text>
    //       <Text className="text-gray-500 text-xs ">May 2025</Text>
    //     </View>
    //     <Pressable>
    //       <FontAwesome name="ellipsis-v" color={"gray"} size={15} />
    //     </Pressable>
    //   </View>

    //   <View className="flex flex-row justify-between items-center mt-5 px-5">
    //     <View className="flex flex-row gap-2 items-center">
    //       <FontAwesome name="arrow-up" size={10} color={"green"} />
    //       <Text className="text-black text-sm font-normal">Income</Text>
    //     </View>
    //     <Text>Rp 5.000.000</Text>
    //   </View>
    //   <View className="flex flex-row justify-between items-center mt-5 px-5">
    //     <View className="flex flex-row gap-2 items-center">
    //       <FontAwesome name="arrow-down" size={10} color={"red"} />
    //       <Text className="text-black text-sm font-normal">Expense</Text>
    //     </View>
    //     <Text>Rp 5.000.000</Text>
    //   </View>
    //   <View className="border-t border-gray-300 my-3 mx-5" />
    //   <View className="flex flex-row justify-between items-center mt-3 px-5">
    //     <View className="flex flex-row gap-2 items-center">
    //       <FontAwesome name="arrow-down" size={10} color={"white"} />
    //       <Text className="text-black text-sm font-normal">Total</Text>
    //     </View>
    //     <Text>Rp 0,00</Text>
    //   </View>
    // </View>
    <View className="bg-white mt-5 p-5 rounded-lg shadow-slate-700">
      {/* Heading */}
      <View className="flex flex-row justify-between px-5">
        <View className="flex flex-col gap-2">
          <Text className="font-bold text-base text-black">Cash flow</Text>
          <Text className="text-gray-500 text-xs">May 2025</Text>
        </View>
        <Pressable>
          <FontAwesome name="ellipsis-v" color={"gray"} size={15} />
        </Pressable>
      </View>

      {/* Income */}
      <View className="flex flex-row justify-between items-center mt-5 px-5">
        <View className="flex flex-row gap-2 items-center">
          <FontAwesome name="arrow-up" size={10} color={"green"} />
          <Text className="text-black text-sm font-normal">Income</Text>
        </View>
        <Text>{format(totalIncome)}</Text>
      </View>

      {/* Expense */}
      <View className="flex flex-row justify-between items-center mt-5 px-5">
        <View className="flex flex-row gap-2 items-center">
          <FontAwesome name="arrow-down" size={10} color={"red"} />
          <Text className="text-black text-sm font-normal">Expense</Text>
        </View>
        <Text>{format(totalExpense)}</Text>
      </View>

      {/* Divider */}
      <View className="border-t border-gray-300 my-3 mx-5" />

      {/* Total */}
      <View className="flex flex-row justify-between items-center mt-3 px-5">
        <View className="flex flex-row gap-2 items-center">
          <FontAwesome name="money" size={10} color={"black"} />
          <Text className="text-black text-sm font-normal">Total</Text>
        </View>
        <Text>{format(totalIncome - totalExpense)}</Text>
      </View>
    </View>
  );
};

export default CashFlowSection;
