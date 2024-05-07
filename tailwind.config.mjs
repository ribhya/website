/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: {
        100: "#f3f4f6",
        300: "#d1d5db",
        500: "#6b7280",
        600: "#4b5563",
        800: "#1f2937",
      },
      indigo: {
        200: "#c7d2fe",
        300: "#a5b4fc",
      },
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      },
      blue: {
        50: "#e3f2fd",
        100: "#bbdefb",
        400: "#42a5f5",
        500: "#2196f3",
      },
      purple: {
        100: "#e1bbe7",
        200: "#ce93d8",
        300: "#ba58c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24AA",
      },
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      },
      red: {
        400: "#f87171",
        500: "#ef4444",
      },
      zinc: {
        200: "#e4e4e7",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
      },
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
