module.exports = {
  siteMetadata: {
    title: "ECA UIL 2018",
  },
  plugins: [
	  "gatsby-plugin-react-helmet",
	  "gatsby-plugin-less",
	  {
		resolve: "gatsby-source-google-sheets",
		options: {
			spreadsheetId: "1X2SpNwcJ6uj9xj0rggtz_6SORk1qhLNgK8GGPpnCv3g",
			worksheetTitle: "Students",
			credentials: require("./UIL Project-107cc84b4edc.json")
		}
	},
	{
		resolve: "gatsby-source-google-sheets",
		options: {
			spreadsheetId: "1X2SpNwcJ6uj9xj0rggtz_6SORk1qhLNgK8GGPpnCv3g",
			worksheetTitle: "Contests",
			credentials: require("./UIL Project-107cc84b4edc.json")
		}
	},
	{
		resolve: "gatsby-source-google-sheets",
		options: {
			spreadsheetId: "1X2SpNwcJ6uj9xj0rggtz_6SORk1qhLNgK8GGPpnCv3g",
			worksheetTitle: "Subjects",
			credentials: require("./UIL Project-107cc84b4edc.json")
		}
	},
	{
		resolve: "gatsby-source-google-sheets",
		options: {
			spreadsheetId: "1X2SpNwcJ6uj9xj0rggtz_6SORk1qhLNgK8GGPpnCv3g",
			worksheetTitle: "Schools",
			credentials: require("./UIL Project-107cc84b4edc.json")
		}
	}
	],
};

