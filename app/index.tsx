import { View } from "react-native";
import ExpensesSection from "./components/Expenses/ExpensesSection";
import ListWalletSection from "./components/ListWallet/ListWalletSection";

export default function Index() {
  return (
    <View className="flex-1 p-4 bg-white pt-16">
      <ListWalletSection />
      <ExpensesSection />
    </View>
  );
}
