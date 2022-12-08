/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			inter: ["Poppins", "sans-serif"],
		},
		colors: {
			white: "#ffffff",
			primary: {
				default: "#6868F7",
				light: "#F0F0FE",
				translucent: "rgba(104, 104, 247, 0.3)",
			},
			tonic: {
				default: "#EB5757",
				translucent: {
					30: "rgba(235, 87, 87, 0.1)",
					10: "rgba(235, 87, 87, 0.1)",
				},
			},
			accent: {
				default: "#F2994A",
				translucent: "rgba(242, 153, 74, 0.1)",
			},
			"blue-grey": "#2F3948",
			grey: "#585757",
		},
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		// require('@tailwindcss/forms'),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};
