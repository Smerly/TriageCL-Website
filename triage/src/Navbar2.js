import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import titlemerch from './images/merchtitle.png';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';
import { DataContext } from './CartExtras/Context';

class Navbar2 extends Component {
	static contextType = DataContext;
	render() {
		const { cart } = this.context;
		return (
			<div>
				<section>
					<div
						className="column"
						style={{ backgroundColor: '#E3A7FF', height: 1000 }}
					>
						<NavLink
							to={`/`}
							className="logolink2 font-weight-bold navbar-brand mb-2"
						></NavLink>

						<nav
							className="navbarcustom2 navbar navbar-inverse navbar-static-top py-4"
							style={{ borderRadius: 5, width: 1100, paddingLeft: 100 }}
						>
							{/* <button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#collapsibleNavbar"
						>
							<span className="navbar-toggler-icon"></span>
						</button> */}
							{/* <div className="collapse navbar-collapse" id="collapsibleNavbar"> */}
							<ul className="nav-item"></ul>

							<ul className="navbar-nav">
								<div className="row">
									<li className="nav-item col-sm mr-4 d-flex align-items-center">
										<NavLink
											whileHover={{ color: 'black' }}
											to={`beans`}
											className="customlink nav-link mx-4"
										>
											Coffee
										</NavLink>
									</li>

									<li className="nav-item col-sm mr-4 d-flex align-items-center">
										<NavLink
											whileHover={{ color: 'black' }}
											to={`/merch`}
											className="customlink nav-link mx-4"
										>
											Merch
										</NavLink>
									</li>

									<li className="nav-item col-sm mr-4 d-flex align-items-center">
										<NavLink
											whileHover={{ color: 'black' }}
											to={`/location`}
											className="customlink nav-link mx-4"
										>
											Locations
										</NavLink>
									</li>

									<li className="nav-item col-sm mr-4 d-flex align-items-center">
										{/* <NavLink
										whileHover={{ color: 'black' }}
										to={`/login`}
										className="customlink nav-link mx-3 mr-5"
									>
										Login
									</NavLink> */}

										<LoginModal />
									</li>

									<li className="nav-item col-sm mr-4 d-flex align-items-center">
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
							{/* </div> */}
						</nav>
						<div className="row">
							<div
								className="col-md"
								style={{ marginTop: 200, marginLeft: 300 }}
							>
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
							<div className="col-md">
								<img
									src={titlemerch}
									className="img-responsive"
									alt="merch mix"
									style={{ width: '80%' }}
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Navbar2;
