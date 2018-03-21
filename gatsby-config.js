const credentials = require( "./credentials/UIL Project-61e227c5fa12.json" );
const spreadsheetId = "1X2SpNwcJ6uj9xj0rggtz_6SORk1qhLNgK8GGPpnCv3g";
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
			spreadsheetId,
			worksheetTitle: "Students",
			credentials
		}
	},
	{
		resolve: "gatsby-source-google-sheets",
		options: {
			spreadsheetId,
			worksheetTitle: "Contests",
			credentials
		}
	},
	{
		resolve: "gatsby-source-google-sheets",
		options: {
			spreadsheetId,
			worksheetTitle: "Subjects",
			credentials
		}
	},
	{
		resolve: "gatsby-source-google-sheets",
		options: {
			spreadsheetId,
			worksheetTitle: "Schools",
			credentials
		}
	}
	],
};

