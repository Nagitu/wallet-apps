import { Text, View } from "react-native";
type WalletCardProps = {
  walletName?: string;
  amount?: number;
};

export function WalletCard({ amount, walletName }: WalletCardProps) {
  return (
    <View className="w-[48%] bg-red-500 p-4 rounded-xl mb-4">
      <Text className="text-white font-bold">{walletName}</Text>
      <Text className="text-white">Rp.{amount}</Text>
    </View>
  );
}
