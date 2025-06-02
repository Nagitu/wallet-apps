import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const Transactions = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [filters, setFilters] = useState<string>("");
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");

  const options = ["Income", "Expense", "Transfer"];
  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <View className="bg-white mt-20 p-4 flex-row items-center justify-between">
        <Pressable
          onPress={() => router.push("/search")}
          className="flex-row items-center gap-2 flex-1"
        >
          <FontAwesome name="search" size={20} />
          <TextInput
            pointerEvents="none"
            editable={false}
            placeholder="Search"
            className="flex-1"
          />
        </Pressable>
        <FontAwesome name="calendar" size={20} />
      </View>
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <View className="bg-white rounde-full mt-10 py-5 rounded-lg shadow-slate-700">
          <View className="flex flex-row justify-between px-5">
            <View className="flex-row gap-2 items-center">
              <View className="bg-blue-500 rounded-xl p-3">
                <Text className="text-lg text-black font-bold">23</Text>
              </View>
              <View>
                <Text className="text-xs text-gray-500 font-normal">
                  Saturday
                </Text>
                <Text className="text-xs text-gray-500 font-normal">
                  23 May 2025
                </Text>
              </View>
            </View>
            <Text className="text-red-700">-Rp.5000.0000</Text>
          </View>

          {Array.from({ length: 5 }).map((_, index) => (
            <View
              className="flex flex-row justify-between px-5 mt-5"
              key={index}
            >
              <View className="flex-row gap-2 items-center">
                <View className="bg-blue-500 rounded-xl p-3">
                  <FontAwesome5 name="wallet" size={20} />
                </View>
                <View>
                  <Text className="text-xs text-gray-500 font-normal">
                    Gift
                  </Text>
                  <Text className="text-xs text-gray-500 font-normal">
                    Cash
                  </Text>
                </View>
              </View>

              <View className="flex-col items-center">
                <Text className="text-xs text-gray-500 font-normal">
                  -Rp.500.000
                </Text>
                <Text className="text-xs text-gray-500 font-normal">
                  07.28 AM
                </Text>
              </View>
            </View>
          ))}
          <View className="flex flex-row justify-between mt-5 px-5">
            <View>
              <Text className="text-xl font-bold text-black">
                Rp 40.000.000
              </Text>
              <Text className="text-sm font-normal">
                <Text className="text-red-600">-Rp 40.000.000 </Text>
                <Text className="text-black">May 2025</Text>
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => setShowKeyboard(true)}
          className="bg-blue-500 h-14 w-14 rounded-lg items-center justify-center absolute"
          style={{
            bottom: 100,
            right: 20,
          }}
        >
          <FontAwesome name="plus" size={20} color="white" />
        </Pressable>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showKeyboard}
        onRequestClose={() => setShowKeyboard(false)}
      >
        <View className="flex-1 justify-end bg-black/30">
          <Pressable
            className="flex-1"
            onPress={() => setShowKeyboard(false)}
          />
          <View className="bg-white rounded-t-2xl px-5 py-6 min-h-[30%]">
            <Text className="text-lg font-bold mb-4">Enter Amount</Text>

            {/* Buttons Income/Expense/Transfer */}
            <View className="flex-row justify-between mb-4">
              {options.map((label) => {
                const isSelected = selectedType === label;

                return (
                  <Pressable
                    key={label}
                    onPress={() => setSelectedType(label)}
                    className={`flex-1 mx-1 h-10 rounded-md items-center justify-center ${
                      isSelected ? "bg-blue-400" : "bg-white"
                    }`}
                  >
                    <Text
                      className={`${
                        isSelected ? "text-black " : "text-black"
                      }font-bold`}
                    >
                      {label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* option source */}
            <View className="flex-row gap-2 m-t-2">
              <View className="flex flex-row gap-2 p-2 rounded-lg items-center ">
                <View className="rounded-xl bg-red-500 p-3">
                  <FontAwesome5 name="wallet" size={15} />
                </View>
                <View className="flex flex-col">
                  <Text className="text-xs">Account Bank</Text>
                  <Text className="text-xs">Rp.4000.000</Text>
                </View>
              </View>
              <View className="flex flex-row gap-2 p-2 rounded-lg items-center ">
                <View className="rounded-xl bg-blue-500 p-3">
                  <FontAwesome5 name="wallet" size={15} />
                </View>
                <View className="flex flex-col">
                  <Text className="text-xs">Account Bank</Text>
                  <Text className="text-xs">Rp.4000.000</Text>
                </View>
              </View>
            </View>

            {/* show input value */}
            <View className="bg-white h-50 w-full py-5 items-center">
              <Text className="text-xl items-center">Rp. {value || "0"}</Text>
            </View>
            <View className="border-t border-gray-300 my-3 mx-5" />

            {/* show category */}
            <FlatList
              horizontal
              data={[
                "Shopping",
                "Insurance",
                "Food",
                "Transportation",
                "Other",
              ]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => console.log(item)}
                  className="bg-blue-500 px-4 py-2 rounded-full"
                >
                  <Text className="text-white font-bold">{item}</Text>
                </Pressable>
              )}
              ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              showsHorizontalScrollIndicator={false}
            />

            {/* Custom keyboard */}
            <View className="bg-white w-full rounded-md flex-row flex-wrap items-center justify-center">
              {[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                ",",
                "0",
                "Del",
              ].map((item, i) => (
                <Pressable
                  key={i}
                  className="w-[30%] p-2"
                  onPress={() => {
                    if (item === "Del") {
                      setValue((prev) => prev.slice(0, -1));
                    } else {
                      setValue((prev) => prev + item);
                    }
                  }}
                >
                  <View className=" items-center justify-center p-4 rounded-md">
                    <Text className="text-black">{item}</Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Transactions;
