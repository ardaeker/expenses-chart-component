/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["var(--font-dm-sans)"],
      },
      fontSize: {
        "sm-caption": [
          "0.938rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        "sm-caption-month": [
          "0.938rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "700",
          },
        ],
        body: [
          "1.125rem",
          {
            lineHeight: "1.438rem",
            fontWeight: "400",
          },
        ],
        "body-bold": [
          "1.125rem",
          {
            lineHeight: "1.438rem",
            fontWeight: "700",
          },
        ],
        "lg-heading": [
          "2rem",
          {
            lineHeight: "2.625rem",
            fontWeight: "700",
          },
        ],
        "xl-heading": [
          "3rem",
          {
            lineHeight: "3.875rem",
            fontWeight: "700",
          },
        ],
        balance: [
          "1.5rem",
          {
            lineHeight: "1.938rem",
            fontWeight: "700",
          },
        ],
        "balance-month": [
          "1.875rem",
          {
            lineHeight: "2.438rem",
            fontWeight: "700",
          },
        ],
        "sm-month": [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
      },
      borderRadius: {
        xs: "1px",
        sm: "3px",
        md: "5px",
        card: "0.625rem",
      },
      colors: {
        white: "#FFFFFF",
        "card-white": "#FFFBF6",
        "cream-bg": "#F8E9DD",
        "medium-brown": "#92857A",
        "dark-brown": "#382314",
        blue: "#B4E0E5",
        cyan: "#76B5BC",
        red: "#EC755D",
        "red-hover": "#FF9B86",
      },
    },
  },
  plugins: [],
};
