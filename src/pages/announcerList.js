import React from 'react'
import { uniq, keyBy, groupBy } from "lodash";
import { convertTime } from "./utils";
import "./reports.less";

class AnnouncerList extends React.Component{

	getCallTime( time, offset ) {
		if( time % 100 === 0 ){
			return time - 40 - offset;
		}
		return time - offset;
	}
	renderCall( label, time, contests ){
		const offset = label === "First" ? 15 : 10;
		return (
			<div className="row big inline-break">
				<div className="col-15">
					{ convertTime( this.getCallTime( time, offset ) ) }
				</div>
				<div className="col-75">
					{ label } Call for the Following Events
				</div>
				<div className="section">
					{ contests.map( this.renderContests ) }
				</div>
			</div>
		)
	}
	renderTime( time, contests ){
		return (
			<div className="big-list">
				{ this.renderCall( "First", time, contests ) }
				<div className="row"/>
				{ this.renderCall( "LAST", time, contests ) }
			</div>
		)
	}

	renderContests( row ) {
		return (
			<div className="row small">
				<div className="col-15">&nbsp;</div>
				<div className="col-75 small-list-item">
				{ row.grade }<sup>th</sup> grade - { row.name }
				</div>
			</div>
		)
	}

	render() {
		const times = uniq( this.props.data.contests.edges.map( r=> {
			return r.node.time;
		} ) );
		const subjects = keyBy( this.props.data.subjects.edges.map( r => {
			return r.node;
		}), "code" );
		const contests = this.props.data.contests.edges.map( edge => {
			const { subject, grade, time } = edge.node;
			return { name:subjects[ subject ].name, grade, time };
		});
		const contestsByTime = groupBy( contests, node => { return node.time; } );

		return (
			<div>
			{
				times.map( t => {
					return this.renderTime( t, contestsByTime[ t ] );
				})
			}
			</div>
		)
	}
}

export default AnnouncerList;

export const announcerList = graphql`
query announceListQuery {
	contests:allGoogleSheetContestsRow {
		edges {
			node {
				subject
				grade
				time
				room
				facilitator
			}
		}
	}
	subjects:allGoogleSheetSubjectsRow {
		edges {
			node {
				code
				name
			}
		}
	}
}`;
