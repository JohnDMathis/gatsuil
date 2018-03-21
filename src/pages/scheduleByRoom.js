import React from 'react'
import Link from 'gatsby-link'
import { keyBy, each, pick, map, sortBy, uniq } from "lodash";
import "./reports.less"
import { convertTime } from "./utils";

class ScheduleByRoom extends React.Component{

	render() {
		const subjects = keyBy( this.props.data.subjects.edges.map( r => {
			return r.node;
		}), "code" );
		const contests = this.props.data.contests.edges.map( r => {
			return r.node;
		});
		const rooms = sortBy( uniq( map( contests, "room" ) ), "room" );
		const scheduleByRoom = rooms.map( room => {
			let i = 0;
			return {
				key: room,
				room,
				contests: sortBy( contests
					.filter( c => { return c.room === room } )
					.map( c => {
						const { time, grade, subject:subjId } = c;
						return {
							key: i++,
							time,
							grade,
							subject: subjects[ subjId ].name
						}
					}))
			};
		});
		return (
			<div>
			{
				scheduleByRoom.map( page => {
					return (
						<div className="break" key={ page.key }>
							<h2>Room { page.room } Schedule</h2>
							<div className="big-list">
							{ page.contests.map( contest => {
								return (
										<h3>
											<div className="col-25">{ convertTime( contest.time ) }</div>
											<div className="col-75">{ contest.subject }, { contest.grade }<sup>th</sup> grade</div>
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

export default ScheduleByRoom;

export const contestsAndStudentsQuery = graphql`
	query scheduleByRoom {
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
