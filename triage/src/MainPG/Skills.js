import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Skills() {
	return (
		<div className="container">
			<div className="column text-center">
				<h1 className="titlecustom" style={{ fontSize: 64 }}>
					{' '}
					Improve Your Skills
				</h1>
				<header
					className="roboto"
					style={{ fontWeight: 100, fontSize: 24, marginTop: -15 }}
				>
					{' '}
					Discover and recreate your favorite coffee.
				</header>

				<div className="embed-responsive embed-responsive-16by9 my-5">
					<iframe
						className="embed-responsive-item"
						src="https://www.youtube.com/embed/_zMjUrTXidA"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	);
}
export default Skills;
