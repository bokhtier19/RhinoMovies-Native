import { icons } from "@/constants/icons";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const savedItems: { id: number; title: string }[] = []; // Replace with real saved data

const Save = () => {
    return (
        <SafeAreaView className="flex-1 px-5 bg-primary">
            {savedItems.length === 0 ? (
                <View className="items-center justify-center flex-1 gap-5">
                    <Image source={icons.save} className="w-24 h-24" tintColor="#fff" />
                    <Text className="text-xl font-bold text-white">No Saved Items</Text>
                    <Text className="text-center text-gray-400">
                        You haven’t saved anything yet. Browse movies and tap “Save” to add your favorites here.
                    </Text>
                    <TouchableOpacity className="px-6 py-3 mt-5 rounded-lg bg-accent">
                        <Text className="font-semibold text-white">Browse Movies</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <FlatList
                    data={savedItems}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View className="p-4 mb-3 rounded-lg bg-dark-100">
                            <Text className="font-medium text-white">{item.title}</Text>
                        </View>
                    )}
                    contentContainerStyle={{ paddingVertical: 20 }}
                />
            )}
        </SafeAreaView>
    );
};

export default Save;
