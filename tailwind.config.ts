import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
          inverse: "var(--color-text-inverse)",
          heading: "var(--color-heading)",
        },
        status: {
          success: "var(--color-success)",
          warning: "var(--color-warning)",
          danger: "var(--color-danger)",
          info: "var(--color-info)",
        },
      },
      spacing: {
        0.5: "var(--space-0-5)",
        1: "var(--space-1)",
        1.5: "var(--space-1-5)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        8: "var(--space-8)",
        10: "var(--space-10)",
        12: "var(--space-12)",
        14: "var(--space-14)",
        24: "var(--space-24)",
        26: "var(--space-26)",
        54: "var(--space-54)",
      },
      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        md: "var(--shadow-md)",
        focus: "var(--shadow-focus)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        linear: "var(--ease-linear)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        medium: "var(--duration-medium)",
        slow: "var(--duration-slow)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
      },
      fontSize: {
        display: [
          "var(--text-display-size)",
          { lineHeight: "var(--text-display-line)", fontWeight: "var(--text-display-weight)" },
        ],
        h1: [
          "var(--text-h1-size)",
          { lineHeight: "var(--text-h1-line)", fontWeight: "var(--text-h1-weight)" },
        ],
        h2: [
          "var(--text-h2-size)",
          { lineHeight: "var(--text-h2-line)", fontWeight: "var(--text-h2-weight)" },
        ],
        body: [
          "var(--text-body-size)",
          { lineHeight: "var(--text-body-line)", fontWeight: "var(--text-body-weight)" },
        ],
        label: [
          "var(--text-label-size)",
          { lineHeight: "var(--text-label-line)", fontWeight: "var(--text-label-weight)" },
        ],
        caption: [
          "var(--text-caption-size)",
          { lineHeight: "var(--text-caption-line)", fontWeight: "var(--text-caption-weight)" },
        ],
      },
    },
  },
  plugins: [],
}

export default config