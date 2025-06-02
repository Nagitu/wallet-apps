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
import accounts from "../../assets/data/accounts.json";
import AccountsSection from "../components/AccountsSection";
import CashFlowSection from "../components/CashFlowSection";

export default function Index() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [filters, setFilters] = useState<string>("");
  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
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
                Rp {Math.abs(totalBalance).toLocaleString("id-ID")}
              </Text>
              <View className="flex flex-row items-center gap-2">
                <FontAwesome
                  name={`long-arrow-${totalBalance < 0 ? "down" : "up"}`}
                  color={`${totalBalance < 0 ? "red" : "green"}`}
                />
                <Text
                  className={`text-sm font-normal ${
                    totalBalance < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {totalBalance < 0 && "-"}Rp{" "}
                  {Math.abs(totalBalance).toLocaleString("id-ID")}
                </Text>
                <Text className="text-sm font-normal text-black">May 2025</Text>
              </View>
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
              {accounts.map((item, i) => (
                <View
                  className="  flex flex-row justify-between items-center mt-2 py-5 px-10"
                  key={i}
                >
                  <View className="flex flex-row gap-2">
                    <FontAwesome name="check" size={20} color="green" />
                    <Text className="text-neutral-500 text-md text-lg">
                      {item.name}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() =>
                      setFilters(filters === item.name ? "" : item.name)
                    }
                  >
                    <View
                      className={`border-2 border-black h-6 w-6 items-center ${
                        filters === item.name ? "bg-blue-500" : ""
                      }`}
                    >
                      {filters === item.name && (
                        <Text className="font-bold">✓</Text>
                      )}
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
