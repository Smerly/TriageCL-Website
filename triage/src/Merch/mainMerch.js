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
			<div
				className="custom-column"
				style={{ backgroundColor: '#E3A7FF', height: 1000 }}
			>
				<Navbar2 />
				<div className="custom-row">
					<div style={{ marginTop: 200, marginLeft: 300 }}>
						<h1
							className="triage"
							style={{
								fontSize: '4vw',
								color: 'white',
								fontWeight: 800,
								marginTop: -15,
							}}
						>
							{' '}
							Show your
						</h1>
						<h1
							className="triage"
							style={{
								fontSize: '4vw',
								color: 'white',
								fontWeight: 800,
								marginTop: -15,
							}}
						>
							{' '}
							coffee science
						</h1>
						<h1
							className="triage"
							style={{
								fontSize: '4vw',
								color: 'white',
								fontWeight: 800,
								marginTop: -15,
							}}
						>
							{' '}
							love.
						</h1>
						<header
							className="triage"
							style={{
								fontWeight: 100,
								fontSize: '1vw',
								marginTop: -15,
								marginBottom: 150,
							}}
						>
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
