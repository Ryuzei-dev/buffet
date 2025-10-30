/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F6F1F",    // verde oliva más oscuro para mejor contraste
        secondary: "#C7E49A",  // verde lima más claro
        accent: "#F5F5DC",     // beige claro
        dark: "#1F2A1F",       // más oscuro para textos
        "mexican-pink": "#E5007D", // rosa mexicano
        "brand-blue": "#0D47A1",   // azul profundo con buen contraste
      },
      fontFamily: {
        title: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};
