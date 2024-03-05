import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import colors from "tailwindcss/colors";

interface HeaderProps {
  title: string;
  cartQuantityItems?: number;
}

export function Header({ title, cartQuantityItems }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image
          source={require("@/assets/images/logo.png")}
          className="h-6 w-32"
        />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {cartQuantityItems > 0 && (
        <Link href="/cart" asChild>
          <TouchableOpacity className="relative">
            <View className="absolute z-10 -top-2 -right-1.5 bg-lime-300 w-4 h-4 rounded-full items-center justify-center">
              <Text className="text-slate-900 font-bold text-xs">
                {cartQuantityItems}
              </Text>
            </View>

            <Feather name="shopping-bag" color={colors.white} size={24} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
