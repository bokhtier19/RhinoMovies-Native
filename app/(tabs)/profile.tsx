import { icons } from "@/constants/icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
    return (
        <SafeAreaView className="flex-1 bg-primary">
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                {/* Avatar + Name */}
                <View className="flex-col items-center justify-center mb-8">
                    <View className="w-32 h-32 mb-4 overflow-hidden border-4 rounded-full shadow-lg border-accent">
                        <Image source={icons.person} className="w-full h-full" tintColor="#fff" resizeMode="cover" />
                    </View>
                    <Text className="text-2xl font-bold text-white">Elius Bokhtier</Text>
                    <Text className="text-gray-400">@elius_dev</Text>
                </View>

                {/* Stats */}
                <View className="flex-row justify-around py-4 mb-6 rounded-lg bg-dark-100">
                    <View className="items-center">
                        <Text className="text-xl font-bold text-white">120</Text>
                        <Text className="text-gray-400">Posts</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-xl font-bold text-white">1.2k</Text>
                        <Text className="text-gray-400">Followers</Text>
                    </View>
                    <View className="items-center">
                        <Text className="text-xl font-bold text-white">350</Text>
                        <Text className="text-gray-400">Following</Text>
                    </View>
                </View>

                {/* Edit Profile Button */}
                <TouchableOpacity className="items-center py-3 mb-6 rounded-lg bg-accent">
                    <Text className="font-semibold text-white">Edit Profile</Text>
                </TouchableOpacity>

                {/* Profile Sections / Cards */}
                <View className="space-y-4">
                    <TouchableOpacity className="flex-row items-center p-4 rounded-lg bg-dark-100">
                        <Image source={icons.person} className="w-6 h-6 mr-4" tintColor="#fff" />
                        <Text className="font-medium text-white">Account Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center p-4 rounded-lg bg-dark-100">
                        <Image source={icons.person} className="w-6 h-6 mr-4" tintColor="#fff" />
                        <Text className="font-medium text-white">Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center p-4 rounded-lg bg-dark-100">
                        <Image source={icons.person} className="w-6 h-6 mr-4" tintColor="#fff" />
                        <Text className="font-medium text-white">Notifications</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
