import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import titlemerch from './images/merchtitle.png';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';
import { DataContext } from './CartExtras/Context';

class Navbar2 extends Component {
	constructor() {
		super();
		this.state = {
			showLinks: false,
		};
	}
	static contextType = DataContext;

	render() {
		const { cart } = this.context;

		return (
			<div>
				<section className="navbar-top-row">
					{/* Logo Home Button */}
					<div>
						<NavLink
							to={`/`}
							className="logolink2 font-weight-bold navbar-brand mb-2"
						></NavLink>
					</div>
					{/* 'navbar navbar-inverse' below */}

					{/* Button for minimized */}

					<nav style={{ backgroundColor: 'white' }} className="drop-down py-4">
						<button
							className="drop-down-button"
							onClick={() => {
								this.setState({ showLinks: !this.state.showLinks });
							}}
						></button>
					</nav>
					{/* Second shown */}

					<ul
						style={{
							position: 'fixed',
							right: 0,
							top: 100,
							width: 200,
							borderRadius: 10,
							zIndex: 99,
						}}
						id={this.state.showLinks ? 'show' : 'hidden'}
					>
						<div style={{ width: 200 }} className="column">
							<li className="nav-item d-flex align-items-center">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`beans`}
									className="customlink nav-link mx-4"
								>
									Coffee
								</NavLink>
							</li>

							<li className="nav-item d-flex align-items-center">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`/merch`}
									className="customlink nav-link mx-4"
								>
									Merch
								</NavLink>
							</li>

							<li className="nav-item d-flex align-items-center">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`/location`}
									className="customlink nav-link mx-4"
								>
									Locations
								</NavLink>
							</li>

							<li className="nav-item d-flex align-items-center">
								{/* <NavLink
										whileHover={{ color: 'black' }}
										to={`/login`}
										className="customlink nav-link mx-3 mr-5"
									>
										Login
									</NavLink> */}

								<LoginModal />
							</li>

							<li className="nav-item d-flex align-items-center">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`/cart`}
									className="customlink carticon nav-link mx-3 mr-5"
								>
									<span> Cart[{cart.length}]</span>
								</NavLink>
							</li>
						</div>
					</ul>

					{/* First Shown */}
					<nav className="navbarcustom2 py-3">
						<ul className="row">
							<li className="nav-item col-sm mr-3 d-flex align-items-center">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`beans`}
									className="customlink nav-link mx-4"
								>
									Coffee
								</NavLink>
							</li>

							<li className="nav-item col-sm mr-3 d-flex align-items-center">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`/merch`}
									className="customlink nav-link mx-4"
								>
									Merch
								</NavLink>
							</li>

							<li className="nav-item col-sm mr-3 d-flex align-items-center">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`/location`}
									className="customlink nav-link mx-4"
								>
									Locations
								</NavLink>
							</li>

							<li className="nav-item col-sm mr-3 d-flex align-items-center">
								{/* <NavLink
										whileHover={{ color: 'black' }}
										to={`/login`}
										className="customlink nav-link mx-3 mr-5"
									>
										Login
									</NavLink> */}

								<LoginModal />
							</li>

							<li className="nav-item col-sm mr-3 d-flex align-items-center">
								<NavLink
									whileHover={{ color: 'black' }}
									to={`/cart`}
									className="customlink carticon nav-link mx-3 mr-3"
								>
									<span> Cart[{cart.length}]</span>
								</NavLink>
							</li>
						</ul>
					</nav>

					{/* </div> */}
				</section>
			</div>
		);
	}
}

export default Navbar2;
