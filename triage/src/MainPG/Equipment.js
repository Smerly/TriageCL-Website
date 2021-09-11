import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Equipmentbg from '../images/Equipmentbg.png';
function Equipment() {
	return (
		<div>
			<div
				className="column text-center"
				style={{
					paddingBottom: 400,
					backgroundImage: `url(${Equipmentbg})`,
					height: '100vh',
					width: 1700,
					objectFit: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
				}}
			>
				<h1 className="titlecustom" style={{ fontSize: 64 }}>
					{' '}
					Our Equipment{' '}
				</h1>

				<header
					className="roboto"
					style={{
						fontWeight: 100,
						fontSize: 24,
						marginTop: -15,
						marginBottom: 300,
					}}
				>
					{' '}
					Make your own Triage at home.
				</header>

				<button
					className="buttoncustom2 titlecustom mt-5"
					style={{
						borderRadius: 300,
						width: 700,
						height: 80,
					}}
				>
					{' '}
					<h2 className="pt-2"> Get our recommended equipment </h2>
				</button>
			</div>
		</div>
	);
}

export default Equipment;
