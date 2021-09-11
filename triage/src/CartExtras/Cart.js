import React, { Component } from 'react';
import { DataContext } from './Context';
import Navbar1 from '../Navbar1';

class Cart extends Component {
	static contextType = DataContext;

	render() {
		const { cart, removeCart, checkOut } = this.context;
		if (cart.length === 0) {
			return (
				<div>
					<Navbar1 />
					<div
						className="m-5 d-flex justify-content-center align-items-center"
						style={{ minHeight: 300 }}
					>
						<h2 className="triage" style={{ color: '#e3a7ff' }}>
							{' '}
							Looks like you don't have anything in your cart yet...{' '}
						</h2>
					</div>
				</div>
			);
		} else {
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
							<>
								{cart.map((item) => (
									// In here is what will be seeing inside the boxes of each product
									<div key={item._id}>
										<div
											className="col-sm my-5"
											style={{ border: '1px black solid' }}
										>
											<div className="d-flex justify-content-center">
												<div className="column d-flex justify-content-center align-items-center">
													<div className="row ml-5">
														<h1
															className="titlecustom"
															style={{ fontSize: '4vw' }}
														>
															{item.title}
														</h1>
														<header
															className="roboto"
															style={{
																fontWeight: 100,
																fontSize: '1vw',
																marginTop: -15,
																marginBottom: 100,
															}}
														>
															{' '}
															The original, a standard white t-shirt with your
															favorite coffee roasters' logo.
														</header>
													</div>

													<img
														className="mx-5"
														src={item.img}
														alt={item.title}
														style={{ width: '60vh' }}
													/>
													<header
														className="roboto mx-5"
														style={{
															fontWeight: 100,
															fontSize: '1vw',
															marginTop: -15,
														}}
													>
														{' '}
														<span>${item.price}</span>
													</header>
													<button
														onClick={() => removeCart(item._id)}
														className="buttoncustom2 mx-5"
													>
														X
													</button>

													<button onClick={() => checkOut(item._id)}>
														{' '}
														Checkout{' '}
													</button>
												</div>
											</div>
										</div>
									</div>
								))}
								<div>
									{/* <Router>
								<Link to="/payment"> Payment </Link>
							</Router> */}
								</div>
							</>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Cart;
