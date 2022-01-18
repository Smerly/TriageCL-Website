import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg1 from '../images/diff-beans.png';
import { NavLink } from 'react-router-dom';

function FSM() {
	return (
		<div className="fsmout">
			<div className="fsmbg column d-flex align-items-center">
				<div className="fsm container">
					<div>
						<h1
							className="triage col-md"
							style={{ color: 'white', fontSize: '4vw' }}
						>
							Fresh on Site,
						</h1>
						<h1
							className="triage col-md"
							style={{ color: 'white', fontSize: '4vw' }}
						>
							Scientifically Roasted,
						</h1>
						<h1
							className="triage col-md"
							style={{ color: 'white', fontSize: '4vw' }}
						>
							Made Just for You.
						</h1>{' '}
					</div>
					<NavLink to={`/beans`}>
						<button className="shop-here-main buttoncustom mt-5">
							<h2 className="shop-here-text pt-2 titlecustom"> Shop Here </h2>
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default FSM;
