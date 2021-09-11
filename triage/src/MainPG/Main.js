import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar1 from '../Navbar1';
import FSM from './FSM';
import Hero from './Hero';
import Story from './Story';
import Separation from './Separation';
import Equipment from './Equipment';
import Skills from './Skills';

function Main() {
	return (
		<div>
			<Navbar1 />
			{/* <Hero /> */}
			<FSM />
			<Story />
			<Separation />
			<Equipment />
			<Separation />
			<Skills />
		</div>
	);
}

export default Main;
