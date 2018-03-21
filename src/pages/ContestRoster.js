import React from 'react'
import "./reports.less";

class ContestRoster extends React.Component{

	renderStudent( student ) {
		return (
			<div className="table-row">
				<div className="text narrow">{ student.key }</div>
				<div className="text narrow">&nbsp;</div>
				<div className="text narrow">&nbsp;</div>
				<div className="text">{ student.name }</div>
				<div className="text">{ student.school }</div>
			</div>
		)
	}

	render() {
		return (
			<div className="break">
				<h2>Contest Roster</h2>
				<h3>{ this.props.subject }, { this.props.grade }<sup>th</sup> Grade</h3>
				<div className="box-left">
					<p><b>Room { this.props.room }</b></p>
				</div>
				<div className="box-right">
					<i>{ this.props.facilitator }</i>
				</div>
				<div className="container-fluid">
					<div className="table-row header">
						<div className="text narrow">Entrant #</div>
						<div className="text narrow">Score / Grade</div>
						<div className="text narrow">Place Rank</div>
						<div className="text">Contestant Name</div>
						<div className="text">School</div>
					</div>

					{ this.props.students.map( this.renderStudent ) }
				</div>
				<div style={ { marginTop:"30px", marginBottom:"40px" } }>
					<p><span className="text-indent">Graders:</span>_______________________________________</p>
					<p><span className="text-indent">&nbsp;</span>_______________________________________</p>
				</div>

		  </div>
		)
	}
}

export default ContestRoster;

