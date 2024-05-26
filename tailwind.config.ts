import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Playfair", "serif"],
      },
      colors: {
        offBlack: "#00101F",
        neutral: "#FFFBF4",
        neutralLight: "#FFFBF4",
        neutralDark: "#FFF1DD",
        primary: "#B94A65",
        primaryDark: "#5E0712",
        primaryLight: "#F8B999",
        secondaryBlue: "#406A91",
        tertiaryYellow: "#FCC686",
        heroPink: "rgba(252, 165, 165, 0.7)", // 80% opacity red
        heroOrange: "rgba(253, 186, 116, 0.7)", // 80% opacity orange
        heroStone: "rgba(250, 250, 250, 0.7)", // 80% opacity stone
      },
    },
  },
  plugins: [],
} satisfies Config;
