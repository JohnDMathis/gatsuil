// import React from 'react'
// import Link from 'gatsby-link'
// import qs from "qs";
// import events from "../data/events.json";
// import "./event.less";

// class Event extends React.Component{

// 	renderStudent( row ) {
// 		return (
// 			<div className="table-row">
// 				<div className="text narrow">{ row.node.entrantNum }</div>
// 				<div className="text narrow">&nbsp;</div>
// 				<div className="text narrow">&nbsp;</div>
// 				<div className="text">{ row.node.student }</div>
// 				<div className="text">{ row.node.school }</div>
// 			</div>
// 		)
// 	}

// 	render() {
// 		const params = qs.parse( this.props.location.search.substring(1) );
// 		console.log( "params:", params );
// 		console.log( "this.props:", this.props );
// 		const rows = this.props.data.allGoogleSheetStudentsRow.edges.filter( r=> {
// 			console.log( "r.node:", r.node );
// 			return r.node[ params.id ] === "x" && r.node.grade.toString() === params.grade;
// 		});
// 		console.log( "rows:", rows );
// 		return (
// 			<div>
// 				<h1>Contest Roster</h1>
// 				<h2>{ events[ params.id ] }</h2>
// 				<h4>{ params.grade }<sup>th</sup> Grade</h4>
// 				<div>
// 					<p>Contest director: __________________________</p>
// 					<p>Grader: __________________________________</p>
// 				</div>
// 				<div className="container-fluid">
// 					<div className="table-row header">
// 						<div className="text narrow">Entrant #</div>
// 						<div className="text narrow">Score / Grade</div>
// 						<div className="text narrow">Place Rank</div>
// 						<div className="text">Contestant Name</div>
// 						<div className="text">School</div>
// 					</div>

// 					{ rows.map( this.renderStudent ) }
// 				</div>
// 		  </div>
// 		)
// 	}
// }

// export default Event

// export const testQuery = graphql`
// 	query events {
// 		allGoogleSheetStudentsRow {
// 		edges {
// 			node {
// 				entrantNum
// 				school
// 				grade
// 				student
// 				ds
// 				ls
// 				sp
// 				rw
// 				impa
// 				imp
// 				ora
// 				orb
// 				or
// 				sci
// 				math
// 				num
// 				mgc
// 			}
// 		  }
// 		}
// 	}`;


// 	// <table>
// 	// <th>
// 	// 	<td>Entrant #</td>
// 	// 	<td>Score / Grade</td>
// 	// 	<td>Place Rank</td>
// 	// 	<td>Contestant Name</td>
// 	// 	<td>School</td>
// 	// </th>
