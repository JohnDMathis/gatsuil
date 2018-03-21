import React from 'react'
import Link from 'gatsby-link'
import ContestRoster from "./ContestRoster";
import { keyBy, each, pick } from "lodash";

class Contests extends React.Component{

	render() {
		const students = this.props.data.students.edges.map( r=> {
			return r.node;
		});
		const subjects = keyBy( this.props.data.subjects.edges.map( r => {
			return r.node;
		}), "code" );
		const schools = keyBy( this.props.data.schools.edges.map( r=> {
			return r.node;
		}), "abbreviation" );
		const contestPages = this.props.data.contests.edges.map( r => {
			// // console.log( "r.node:", r.node );
			return {
				key: `${ r.node.subject }-${ r.node.grade }`,
				subject: subjects[ r.node.subject ].name,
				grade: r.node.grade,
				time: r.node.time,
				room: r.node.room,
				facilitator: r.node.facilitator,
				students: students
					.filter( s => { return s[ r.node.subject ] === "x" && s.grade === r.node.grade; } )
					.map( s => {
						const { entrantNum:key, school, grade, student:name } = s;
						return { key, school: schools[ school ].name, grade, name };
					})
			}
		});
		console.log( "contestPages:", contestPages );
		return (
			<div>
			{
				contestPages.map( page => {
					return (
						<ContestRoster { ...page } />
					 )
				})
			}
			</div>
		)
	}
}

export default Contests;

export const contestsAndStudentsQuery = graphql`
	query contestsAndStudents {
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
		students:allGoogleSheetStudentsRow {
		edges {
			node {
				entrantNum
				school
				grade
				student
				ds
				ls
				sp
				rw
				impa
				imp
				ora
				orb
				or
				sci
				math
				num
				mgc
			}
		  }
		}
		schools:allGoogleSheetSchoolsRow {
		edges {
			node {
				abbreviation
				name
			}
		}
		}
	  }`;
