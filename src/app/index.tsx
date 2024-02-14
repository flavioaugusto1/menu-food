import { View, FlatList } from "react-native";
import { CATEGORIES } from "@/src/utils/data/products";
import { Header } from "../components/header";
import { CategoryButton } from "../components/category-button";

export default function Home() {
  return (
    <View className="pt-8">
      <Header title="Faça o seu pedido" cartQuantityItems={2} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryButton title={item} />}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
