import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AccountsSection from "../components/AccountsSection";
import CashFlowSection from "../components/CashFlowSection";

export default function Index() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [filters, setFilters] = useState<string>("");

  return (
    <View className="flex-1 bg-slate-100">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <View className="bg-white rounde-full mt-20 py-5 rounded-lg shadow-slate-700">
          <View className="flex flex-row justify-between px-5">
            <Text className="font-bold text-base text-black">
              Total Balance
            </Text>
            <Pressable onPress={() => setModalVisible(true)}>
              <FontAwesome name={"bars"} size={20} color={"black"} />
            </Pressable>
          </View>
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
        <AccountsSection />
        <CashFlowSection />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View className="flex-1 bg-black/30 justify-end">
            <View className=" min-h-[40%] bg-white rounded-t-[30px] py-10 ">
              <Text className="text-normal font-semibold text-lg px-10">
                Total balance and filters
              </Text>
              <View className="  flex flex-row justify-between items-center mt-2 py-5 px-10">
                <View className="flex flex-row gap-2">
                  <FontAwesome name="check" size={20} color="green" />
                  <Text className="text-neutral-500 text-md text-lg">
                    All Accounts
                  </Text>
                </View>
                <Pressable
                  onPress={() => setFilters(filters === "all" ? "" : "all")}
                >
                  <View className="border-2 border-black h-6 w-6 items-center">
                    {filters === "all" && <Text className="font-bold">✓</Text>}
                  </View>
                </Pressable>
              </View>
              <View className="border-t border-gray-300 my-3 mx-5" />
              {["Bank", "wallet"].map((item, i) => (
                <View
                  className="  flex flex-row justify-between items-center mt-2 py-5 px-10"
                  key={i}
                >
                  <View className="flex flex-row gap-2">
                    <FontAwesome name="check" size={20} color="green" />
                    <Text className="text-neutral-500 text-md text-lg">
                      {item}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => setFilters(filters === item ? "" : item)}
                  >
                    <View
                      className={`border-2 border-black h-6 w-6 items-center ${
                        filters === item ? "bg-blue-500" : ""
                      }`}
                    >
                      {filters === item && <Text className="font-bold">✓</Text>}
                    </View>
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
