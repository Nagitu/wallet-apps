import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

type Transaction = {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense" | "investment";
};

const dummyTransactions: Transaction[] = [
  { id: 1, description: "Gaji Bulanan", amount: 5000000, type: "income" },
  { id: 2, description: "Beli Kopi", amount: 25000, type: "expense" },
  {
    id: 3,
    description: "Investasi Saham",
    amount: 1000000,
    type: "investment",
  },
  { id: 4, description: "Beli Makanan", amount: 75000, type: "expense" },
  { id: 5, description: "Bonus Project", amount: 2000000, type: "income" },
];

export default function SearchScreen() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const filtered = dummyTransactions.filter(
    (item) =>
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 bg-slate-100 mt-20">
      <Pressable
        className="flex-row gap-5 items-center justify-start px-5"
        onPress={() => {
          router.push("/(tabs)/transactions");
        }}
      >
        <FontAwesome name="long-arrow-left" size={20} color={"black"} />
        <Text className="text-lg font-bold">Back</Text>
      </Pressable>
      <View className="bg-white mt-5 p-4 flex-row items-center gap-2 mx-4 rounded">
        <FontAwesome name="search" size={20} />
        <TextInput
          placeholder="Search transactions..."
          value={search}
          className="flex-1"
          onChangeText={(e) => setSearch(e)}
        />
      </View>

      {search ? (
        <View className="mt-4 px-4">
          <Text className="text-gray-700 mb-2">
            Search results for: <Text className="font-semibold">{search}</Text>
          </Text>

          {filtered.length > 0 ? (
            <FlatList
              data={filtered}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View className="bg-white p-4 mb-2 rounded">
                  <Text className="font-semibold">{item.description}</Text>
                  <Text>Rp {item.amount.toLocaleString("id-ID")}</Text>
                  <Text className="text-xs text-gray-500">{item.type}</Text>
                </View>
              )}
            />
          ) : (
            <Text className="text-gray-500 italic">No matching results.</Text>
          )}
        </View>
      ) : null}
    </View>
  );
}
