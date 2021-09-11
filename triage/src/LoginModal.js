import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

class LoginModal extends Component {
	constructor() {
		super();
		this.state = {
			show: false,
		};
	}
	handleModal() {
		this.setState({ show: !this.state.show });
	}

	render() {
		return (
			<div className="nav-link">
				<button
					href="#"
					className="nav-link mx-3 mr-5"
					style={{
						borderRadius: 100,
						fontSize: '1vw',
						backgroundColor: '#E3A7FF',
						color: 'white',
						width: 150,
						height: 60,
					}}
					onClick={() => {
						this.handleModal();
					}}
				>
					<p
						className="triage titlecustom2"
						style={{
							fontSize: '2vw',
						}}
					>
						Login
					</p>
				</button>
				<Modal show={this.state.show} onHide={() => this.handleModal()}>
					<Modal.Header
						closeButton
						style={{ backgroundColor: '#E3A7FF', height: 170 }}
					></Modal.Header>
					<Modal.Body style={{ height: 350 }}></Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</div>
		);
	}
}
export default LoginModal;
