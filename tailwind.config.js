module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fonts
      fontFamily: {
        base: ["DM Sans", "sans-serif"],
        display: ["Crimson Text", "serif"],
        mono: ["Roboto Mono", "monospace"],
      },

      colors: {
        background: "#ffffff",
        base: "#000000",

        //accents
        accent: {
          1: "#485c11",
          2: "#dfecc6",
          3: "#8e9c78",
          4: "#000000",
          5: "#6f6f6f",
          6: "#929292",
        },

        //text
        headline: "#000000",
        paragraph: "#6f6f6f",
        captions: "#485c11",
        link: "#000000",

        divider: "#e9e9e9",
      },

      fontSize: {
        "display-stats": [
          "80px",
          {
            lineHeight: "1",
            letterSpacing: "-0.025em",
            fontWeight: "400",
          },
        ],

        display: [
          "160px",
          {
            lineHeight: "0.9",
            letterSpacing: "-0.0425em",
            fontWeight: "400",
          },
        ],

        "heading-1": [
          "60px",
          {
            lineHeight: "0.9",
            letterSpacing: "-0.03em",
            fontWeight: "400",
          },
        ],

        "heading-2": [
          "40px",
          {
            lineHeight: "1",
            letterSpacing: "-0.04em",
            fontWeight: "400",
          },
        ],

        "heading-3": [
          "18px",
          {
            lineHeight: "1",
            letterSpacing: "-0.03em",
            fontWeight: "400",
          },
        ],

        paragraph: [
          "15px",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.005em",
          },
        ],

        link: [
          "14px",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.025em",
            fontWeight: "700",
          },
        ],

        captions: [
          "12px",
          {
            lineHeight: "1.4",
            letterSpacing: "-0.001em",
          },
        ],

        logo: [
          "30px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.05em",
          },
        ],

        "table-title": [
          "23px",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.08em",
            fontWeight: "500",
          },
        ],
      },

      //spacing
      spacing: {
        xxs: "14px",
        xs: "20px",
        sm: "22px",
        md: "24px",
        lg: "30px",
        xl: "40px",
        "2xl": "50px",
        "3xl": "60px",
        "4xl": "80px",
        "5xl": "100px",
        "6xl": "120px",
        "7xl": "240px",
        pill: "300px",
      },

      //gap
      gap: {
        xxxs: "2px",
        xxs: "8px",
        xs: "10px",
        sm: "20px",
        md: "24px",
        lg: "27px",
        xl: "30px",
        "2xl": "40px",
        "3xl": "50px",
        "4xl": "60px",
        "5xl": "80px",
        pill: "240px",
      },

      //radius
      borderRadius: {
        sm: "20px",
        md: "24px",
        lg: "30px",
        pill: "100px",
      },
    },
  },
  plugins: [],
};
