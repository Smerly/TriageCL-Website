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
					width: '100vw',
					objectFit: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%',
				}}
			>
				<h1 className="equip-title titlecustom"> Our Equipment</h1>
				<header className="equip-header roboto">
					{' '}
					Make your own Triage at home.
				</header>

				<button className="button-equips buttoncustom2 titlecustom mt-5">
					{' '}
					<h2 className="button-equips-text pt-2">
						{' '}
						Get our recommended equipment{' '}
					</h2>
				</button>
			</div>
		</div>
	);
}

export default Equipment;
