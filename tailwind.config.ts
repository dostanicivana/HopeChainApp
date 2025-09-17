import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      colors: {
        primary: "#E63946",       // crvena (za akcente i dugmad)
        secondary: "#1D3557",     // tamnoplava / tamna siva za tekst
        accent: "#F1FAEE",        // svetla pozadina (skoro bela)
        success: "#06D6A0",       // zelena (ikonice, statusi)
        warning: "#FFB703",       // oranž (ikonice, highlight)
      },
    },
  },
  plugins: [],
};
export default config;