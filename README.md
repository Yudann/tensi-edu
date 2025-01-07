# Welcome to the Mobile Health Education App 👋

This is a **React Native Expo** project created using [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). This app is designed to provide health education through videos, posters, and interactive features.

## Features

- 📱 **Mobile-first application** with responsive UI for both iOS and Android.
- 🔀 **Navigation** using bottom tabs for easy access to various sections.
- 🎥 Video library linking directly to YouTube for health education.
- 🖼️ Poster gallery with educational content.
- 🎨 Styling using **Tailwind CSS** and standard **StyleSheet** for React Native.

## Get started

1. Install dependencies

   ```bash
   npm install
   Start the app
   ```

bash
Salin kode
npx expo start
You can run the app using:

Expo Go for a quick preview on your phone.
iOS simulator.
Android emulator.
Directory structure
plaintext
Salin kode
.
├── app/ # Main app folder
│ ├── screens/ # Contains all screen components
│ ├── navigation/ # Navigation setup (tab-based navigation)
│ ├── components/ # Reusable components
│ ├── constants/ # Shared constants (e.g., colors, styles)
│ └── assets/ # Images and other static files
├── tailwind.config.js # Tailwind CSS configuration
├── commitlint.config.js # Commitlint rules for consistent commit messages
└── README.md # Project documentation

Development tips
File-based routing
This project uses file-based routing provided by Expo Router. You can organize pages by adding new files inside the app/ directory.

Tailwind CSS setup
Tailwind CSS is integrated using the tailwindcss-react-native package for consistent and scalable styling. Learn more about the setup in their documentation.

Commitlint
To maintain a clean commit history, this project uses commitlint with the following rules:

Use Conventional Commits format for your messages (e.g., feat: add video gallery).
Learn more
Explore these resources to learn more about the tools used in this project:

Expo documentation: Learn more about React Native and Expo.
Tailwind CSS React Native: Styling with Tailwind in React Native.
React Navigation: Documentation for navigation.
Community
Join the React Native and Expo communities for additional help and support:

Expo on GitHub
React Native community
