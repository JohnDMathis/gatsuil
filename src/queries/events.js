export default graphql`
	query event {
		allGoogleSheetStudentsRow(filter:{
			mgc: { eq: "x"}
			grade:{ eq: 7 }
		}) {
		edges {
			node {
			id
			school
			grade
			student
			event1
			}
		  }
		}
	}`;
