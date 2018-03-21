import React from 'react'
import Link from 'gatsby-link'
import { keyBy, each, pick, map, sortBy } from "lodash";
import "./reports.less"
import { convertTime } from "./utils";

class ScheduleByGrade extends React.Component{

	render() {
		const subjects = keyBy( this.props.data.subjects.edges.map( r => {
			return r.node;
		}), "code" );
		const contests = this.props.data.contests.edges.map( r => {
			return r.node;
		});
		console.log( "contests:", contests );
		let pg=0;
		const scheduleByGrade = [4,5,6,7,8].map( g => {
			let i=0;
			return {
				key: pg++,
				grade: g,
				contests: sortBy( contests
					.filter( c => { return c.grade === g } )
					.map( c => {
						const { time, subject:subjId, room } = c;
						return {
							key: i++,
							time,
							subject: subjects[ subjId ].name,
							room
						};
					} ), [ "time", "subject" ] )
				};
			} );
		console.log( "scheduleByGrade:", scheduleByGrade );
		return (
			<div>
			{
				scheduleByGrade.map( page => {
					console.log( "page:", page );
					return (
						<div className="break" key={ page.key }>
							<h2>{ page.grade }<sup>th</sup> Grade Schedule</h2>
							<div className="big-list">
							{ page.contests.map( contest => {
								return (
										<h3>
											<div className="col-25">{ convertTime( contest.time ) }</div>
											<div className="col-50">{ contest.subject }</div>
											<div className="col-25 right small">Rm { contest.room}</div>
										</h3>
										)
									} ) }
							</div>
						</div>
					 )
				})
			}
			</div>
		)
	}
}

export default ScheduleByGrade;

export const contestsAndStudentsQuery = graphql`
	query scheduleByGrade {
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
