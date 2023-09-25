/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		screens: {
			xl: "120rem",
			l: "99.2rem",
			md: "76.8rem",
			sm: "57.6rem",
		},

		colors: {
			black: "#121212",
			gray: "#393e46",
			white: "#ffffff",
			red: "#ff2e63",
			yellow: "#ffd369",
			green: "#a4be7b",
			hollow: "transparent",
		},

		fontFamily: {
			bold: "poppins-b",
			semiBold: "poppins-sb",
			medium: "poppins-m",
		},

		extend: {
			spacing: (() => {
				const spacing = {};
				for (let i = 1; i <= 1000; i++) {
					const fixedNum = parseFloat((i * 0.1).toFixed(1));
					spacing[fixedNum] = `${fixedNum}rem`;
				}
				return spacing;
			})(),

			minWidth: (() => {
				const minWidth = {};
				for (let i = 1; i <= 1000; i++) {
					const fixedNum = parseFloat((i * 0.1).toFixed(1));
					minWidth[fixedNum] = `${fixedNum}rem`;
				}
				return minWidth;
			})(),

			fontSize: {
				sm: "1.4rem",
				md: "1.6rem",
				lg: "2.2rem",
				xl: "3.2rem",
			},

			borderWidth: {
				1: "0.1rem",
				2: "0.2rem",
				3: "0.3rem",
				4: "0.4rem",
			},

			borderRadius: {
				sm: "0.1rem",
				md: "0.5rem",
			},
		},
	},

	plugins: [],
};
