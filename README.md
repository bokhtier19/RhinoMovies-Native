# RhinoMovies Native

A cross-platform mobile movie discovery app built with React Native (Expo), TypeScript, and Appwrite. Browse trending and top-rated films with real-time search, powered by the TMDB API.

## Features

- 🎬 Browse trending and top-rated movies via TMDB API
- 🔍 Real-time search with debounced queries
- 📊 Trending algorithm powered by Appwrite — tracks which movies users search most
- 🔐 Appwrite backend for database and server functions
- 📱 Cross-platform — iOS and Android via Expo
- 🎨 Styled with NativeWind (Tailwind CSS for React Native)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native + Expo |
| Language | TypeScript |
| Styling | NativeWind (Tailwind CSS) |
| Backend | Appwrite (Database + Functions) |
| Movie Data | TMDB API |
| Navigation | Expo Router |

## Getting Started

### Prerequisites
- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your phone (for testing)

### Installation

```bash
git clone https://github.com/bokhtier19/RhinoMovies-Native.git
cd RhinoMovies-Native
cp .env.example .env   # fill in your API keys
npm install
npx expo start
```

### Environment Variables

```env
EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_bearer_token
EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_collection_id
EXPO_PUBLIC_APPWRITE_PROJECT_NAME=RhinoMovies
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
```

## License
MIT