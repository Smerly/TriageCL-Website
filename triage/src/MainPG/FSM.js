import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg1 from '../images/mainpurple.png';
import { NavLink } from 'react-router-dom';

function FSM() {
	return (
		<div>
			<div
				className="column d-flex align-items-center"
				style={{
					backgroundImage: `url(${bg1})`,
					height: '100vh',
					// width: 1700,
					maxWidth: '100vw',
					objectFit: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%',
				}}
			>
				<div className="container">
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
					<NavLink to={`/beans`}>
						<button
							className="mt-5 col-md buttoncustom"
							style={{ borderRadius: 300, width: '15.375vw', height: '11vh' }}
						>
							<h2 className="pt-2 titlecustom" style={{ fontSize: '2vw' }}>
								{' '}
								Shop Here{' '}
							</h2>
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default FSM;
