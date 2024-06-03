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
        neutral: "#FFFBF4",
        neutralLight: "#FFFBF4",
        neutralDark: "#FFF1DD",
        primary: "#B94A65",
        primaryDark: "#5E0712",
        primaryLight: "#F8B999",
        secondaryBlue: "#406A91",
        tertiaryYellow: "#FCC686",
        heroPink: "rgba(252, 145, 165, 0.5)",
        heroOrange: "rgba(253, 186, 116, 0.6)",
        heroStone: "rgba(250, 250, 250, 0.75)",
        blurWhite: "rgba(255, 255, 255, 0.5)",
        blurBlack: "rgba(0, 0, 0, 0.4)",
      },
      boxShadow: {
        themeShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
} satisfies Config;
