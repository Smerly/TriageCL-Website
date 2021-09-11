import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../Navbar1';

function Location() {
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
						Find your nearest Triage
					</h2>

					<div className="row">
						<div className="col-sm">
							<iframe
								width="600"
								height="500"
								src="https://maps.google.com/maps?q=Alameda&t=&z=13&ie=UTF8&iwloc=&output=embed"
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								style={{ border: '1px black solid', borderRadius: 10 }}
							></iframe>

							<a
								href="https://maps-google.github.io/embed-google-map/"
								className="customlink"
								style={{ textDecoration: 'none' }}
							>
								embed google map
							</a>
						</div>

						<div className="col-sm">
							<h1 className="triage" style={{ fontSize: '4vw' }}>
								Our Locations
							</h1>

							<ul>
								<li className="triage customlist mt-3">Alameda, CA</li>

								<li className="triage customlist mt-3">San Francisco, CA</li>

								<li className="triage customlist mt-3">San Jose, CA</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Location;
