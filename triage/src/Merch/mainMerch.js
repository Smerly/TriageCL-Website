import React from 'react';
import titlemerch from '../images/merchtitle.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../Navbar2';
import MerchItems from './MerchItems';
import { HashRouter as Router } from 'react-router-dom';
function MerchMain() {
	return (
		<Router>
			<div className="custom-column">
				<Navbar2 />
				<div className="custom-row">
					<div className="fsm-text">
						<h1 className="fsm-text-each triage"> Show your</h1>
						<h1 className="fsm-text-each triage"> coffee science</h1>
						<h1 className="fsm-text-each triage"> love.</h1>
						<header className="fsm-text-header triage">
							{' '}
							Buy some of our official Triage merch.
						</header>
					</div>
					<div>
						<img src={titlemerch} className="img-resp-1" alt="merch mix" />
					</div>
				</div>
			</div>
			<MerchItems />
		</Router>
	);
}

export default MerchMain;
