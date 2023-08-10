const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "414px",
			sm: "640px",
			md: "720px",
			lg: "1000px",
			"lg-max": { max: "960px" },
			xl: "1140px",
			"2xl": "1440px",
			"3xl": "1441px",
		},
		extend: {
			colors: {
				primary: "#530E25",
			},
		},
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "2rem",
				xl: "2rem",
				"2xl": "5rem",
			},
			center: true,
		},
	},
	plugins: [],
});
