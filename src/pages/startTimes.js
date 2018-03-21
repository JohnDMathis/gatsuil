import React from 'react'
import Link from 'gatsby-link'
import qs from "qs";
import events from "../data/events.json";
import { uniq, padStart } from "lodash";
import "./reports.less";

class StartTimes extends React.Component{

	convertTime( time ) {
		const timeStr = time.toString();
		const min = timeStr.substr( timeStr.length - 2, 2);
		let hr = timeStr.substring( 0, timeStr.length - 2);
		if( time > 1259 ) {
			hr = (Number( hr ) - 12).toString();
		}
		const ampm = time > 1159 ? "pm" : "am";
		return `${ hr }:${ min } ${ ampm }`;
	}
	renderTimePage( time, contests ){
		return (
			<div className="break" >
				<div></div>
				<h2>{ this.convertTime( time ) }</h2>
				{ contests.map( this.renderContests ) }
			</div>
		)
	}

	renderContests( row ) {
		return (
			<div className="contestEntry" >
				<h3>{ events[ row.subject ] }, { row.grade }<sup>th</sup> grade</h3>
			</div>
		)
	}

	render() {
		const times = uniq( this.props.data.allGoogleSheetContestsRow.edges.map( r=> {
			return r.node.time;
		} ) );
		console.log( "this.props.data:", this.props.data );
		const contests = this.props.data.allGoogleSheetContestsRow.edges.map( edge => {
			return edge.node;
		});
		console.log( "contests:", contests );
		const contestsByTime = _.groupBy( contests, node => { console.log( node  ); return node.time; } );
		console.log( "contestsByTime:", contestsByTime );
		// return this.renderTimePage );
		return (
			<div>
			{
				times.map( t => {
					return this.renderTimePage( t, contestsByTime[ t ] );
				})
			}
			</div>
		)
	}
}

export default StartTimes

export const testQuery = graphql`
	query starttimes {
		allGoogleSheetContestsRow {
		  edges {
			node {
			  time
			  subject
			  grade
			}
		  }
		}
	  }`;
