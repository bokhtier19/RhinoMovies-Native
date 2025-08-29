import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({ id, title, poster_path, vote_average, release_date }: Movie) => {
    {
        return (
            <Link href={`/movies/${id}`} asChild>
                <TouchableOpacity className="w-[30%]">
                    <Image
                        source={{
                            uri: poster_path
                                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                : `https://placeholder.co/600x400/1a1a1a/ffffff.png`,
                        }}
                        className="w-full rounded-lg h-52"
                        resizeMode="cover"
                    />
                    <Text className="mt-2 text-sm font-bold text-white" numberOfLines={1}>
                        {title}
                    </Text>
                    <View className="flex-row items-center gap-1">
                        <Image source={icons.star} className="size-4" />
                        <Text className="text-xs font-bold text-white uppercase">{Math.round(vote_average / 2)}</Text>
                    </View>
                    <View className="flex-row justify-between">
                        <Text className="text-xs font-bold text-gray-300">{release_date?.split("-")[0]}</Text>
                        <Text className="hidden text-xs font-bold text-gray-300">MOVIE</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        );
    }
};

export default MovieCard;
