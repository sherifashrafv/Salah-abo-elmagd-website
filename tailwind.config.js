/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
  purge: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
        },
        third: {
          DEFAULT: "var(--third)",
        },
        primaryBg: "var(--primary-bg-card)",
        secondaryBg: "var(--secondary-bg-card)",
        thirdBg: "var(--third-bg-card)",
        fourthBg: "var(--fourth-bg)",
        fifith: "var(--fifith-color)",
      },
      fontFamily: {
        Proxima: "var(--font-en)",
        TTRunsTrail: ["TT Runs Trial", "sans-serif"],
      },
      container: {
        center: true,
        screens: {
          sm: "1004px",
          md: "1311px",
          lg: "1100px",
          xl: "1722px ",
          "2xl": "1600px",
        },
      },
    },
  },
  plugins: [],
};
