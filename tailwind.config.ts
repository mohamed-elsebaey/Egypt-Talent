import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ssm: "430px",
      s480: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        customBlue: "#5998EB",
        customPink: "#B04E91",
      },
      backgroundImage: {
        "bg-1": "url('/Background1440px.jpg')",
        "bg-2": "url('/Background770px.jpg')",
        "bg-3": "url('/Background480px.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
