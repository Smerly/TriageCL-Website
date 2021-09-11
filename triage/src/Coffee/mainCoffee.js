import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../Navbar1';
function mainCoffee() {
	return (
		<div>
			<Navbar1 />
			<div className="column mb-5">
				<div
					className="col-sm"
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h2 className="triage my-3" style={{ color: '#E3A7FF' }}>
						{' '}
						Our Coffee Beans
					</h2>
					<nav className="navbar navbar-expand-sm d-flex justify-content-center align-items-center p-5">
						<ul className="navbar-nav mr-5">
							<li className="nav-item mx-5">
								<a
									href="#"
									className="triage text-dark"
									style={{ textDecoration: 'none' }}
								>
									Single Origin
								</a>
							</li>

							<div
								className="mx-5 center"
								style={{
									height: 30,
									width: 1,
									border: '1px gray solid',
									borderRadius: 30,
								}}
							></div>

							<li className="nav-item mx-5">
								<a
									href="#"
									className="triage text-dark"
									style={{ textDecoration: 'none' }}
								>
									Decaf
								</a>
							</li>

							<div
								className="mx-5 center"
								style={{
									height: 30,
									width: 1,
									border: '1px gray solid',
									borderRadius: 30,
								}}
							></div>

							<li className="nav-item mx-5">
								<a
									href="#"
									className="triage text-dark"
									style={{ textDecoration: 'none' }}
								>
									Other
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className="col-sm mt-5">
					<div className="d-flex justify-content-center">
						<div className="column">
							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>
						</div>

						<div className="column">
							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>
						</div>

						<div className="column">
							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>
						</div>

						<div className="column">
							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>

							<div className="boxcoffee">
								<img src="#" alt="coffee type 1" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default mainCoffee;
