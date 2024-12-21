/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DAEEEB', // Background utama
        secondary: {
          DEFAULT: '#1F7A8C', // Warna utama untuk button
          accent: '#F4D35E', // Warna accent untuk tombol mencolok
          highlight: '#F2545B',
        },
        black: {
          DEFAULT: '#000',
          100: '#1E1E2D', // Untuk teks utama dengan kontras tinggi
          200: '#084C61', // Warna gelap yang harmonis untuk teks tambahan
        },
        gray: {
          100: '#CDCDE0', // Warna abu terang untuk border atau elemen pendukung
          200: '#B0D6CE', // Warna hover atau bayangan
        },
        shadow: {
          DEFAULT: 'rgba(0, 0, 0, 0.2)', // Untuk efek bayangan
        },
      },
      fontFamily: {
        pthin: ['Poppins-Thin', 'sans-serif'],
        pextralight: ['Poppins-ExtraLight', 'sans-serif'],
        plight: ['Poppins-Light', 'sans-serif'],
        pregular: ['Poppins-Regular', 'sans-serif'],
        pmedium: ['Poppins-Medium', 'sans-serif'],
        psemibold: ['Poppins-SemiBold', 'sans-serif'],
        pbold: ['Poppins-Bold', 'sans-serif'],
        pextrabold: ['Poppins-ExtraBold', 'sans-serif'],
        pblack: ['Poppins-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
