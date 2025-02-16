/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  primary: "var(--font-jetbrainsMono)",
		},
		colors: {
		  background: "var(--background)",
		  foreground: "var(--foreground)",
		  primary: "#1c1c22",
		  accent: {
			DEFAULT: "#00ff99",
			hover: "#00e187",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		screens: {
		  sm: "640px",
		  md: "768px",
		  lg: "960px",
		  xl: "1200px",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  