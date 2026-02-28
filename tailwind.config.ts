import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        wallpoet: ["var(--font-wallpoet)"],
      },
    },
  },
  plugins: [],
};

export default config;
