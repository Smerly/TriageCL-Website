import React, { Component } from 'react';
import Cart from './Cart';
import Payment from './Payment';
import { HashRouter as Router, Route } from 'react-router-dom';

class Combine extends Component {
	render() {
		return (
			<Router>
				<Route path="/cart" component={Cart} />
				<Route path="/payment" component={Payment} />
			</Router>
		);
	}
}
export default Combine;
