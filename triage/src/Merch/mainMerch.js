import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from '../Navbar2';
import MerchItems from './MerchItems';
import { HashRouter as Router } from 'react-router-dom';
function MerchMain() {
	return (
		<Router>
			<Navbar2 />
			<MerchItems />
		</Router>
	);
}

export default MerchMain;
