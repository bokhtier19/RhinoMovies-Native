import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import { fetchMovies } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";
import useFetch from "@/services/usefetch";

import MovieDisplayCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const {
        data: movies = [],
        loading,
        error,
        refetch: loadMovies,
        reset,
    } = useFetch(() => fetchMovies({ query: searchTerm }));

    const handleSearch = (text: string) => {
        setSearchTerm(text);
    };

    // Debounced search effect: only fetch movies
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchTerm.trim()) {
                loadMovies();
            } else {
                reset();
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    // Effect to update search count after movies load
    useEffect(() => {
        if (Array.isArray(movies) && movies.length > 0) {
            updateSearchCount(searchTerm, movies[0]);
        }
    }, [movies, searchTerm]);

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute z-0 flex-1 w-full" resizeMode="cover" />

            <FlatList
                className="px-5"
                data={movies as Movie[]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <MovieDisplayCard {...item} />}
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: "flex-start",
                    gap: 16,
                    marginVertical: 16,
                }}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListHeaderComponent={
                    <>
                        <View className="flex-row items-center justify-center w-full mt-20">
                            <Image source={icons.logo} className="w-12 h-10" />
                        </View>

                        <View className="my-5">
                            <SearchBar
                                placeholder="Search for a movie"
                                value={searchTerm}
                                onChangeText={handleSearch}
                            />
                        </View>

                        {loading && <ActivityIndicator size="large" color="#0000ff" className="my-3" />}

                        {error && <Text className="px-5 my-3 text-red-500">Error: {error.message}</Text>}

                        {!loading && !error && searchTerm.trim() && movies && movies.length > 0 && (
                            <Text className="text-xl font-bold text-white">
                                Search Results for <Text className="text-accent">{searchTerm}</Text>
                            </Text>
                        )}
                    </>
                }
                ListEmptyComponent={
                    !loading && !error ? (
                        <View className="px-5 mt-10">
                            <Text className="text-center text-gray-500">
                                {searchTerm.trim() ? "No movies found" : "Start typing to search for movies"}
                            </Text>
                        </View>
                    ) : null
                }
            />
        </View>
    );
};

export default Search;
