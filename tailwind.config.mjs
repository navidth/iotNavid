const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      tablet: "834px",
      lg: "1024px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        primary: "#your-color", // مثلاً: "#1a1a1a"
        secondary: "#0000008a", // رنگ نیمه‌شفاف
      },
    },
  },
  plugins: [],
};
export default config;
