import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Yoryen from './video/Hero.mp4';
import { Carousel } from 'react-bootstrap';

function Hero() {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<div>
						<video
							autoPlay
							loop
							muted
							style={{
								position: 'absolute',
								width: '50%',
								left: '50%',
								right: '50%',
								top: '50%',
								height: 'auto',
								objectFit: 'cover',
								transform: 'translate(-50%, -50%)',
								zIndex: '-1',
								marginTop: 100,
								marginBottom: 0,
								border: '1px black solid',
							}}
							className="my-5"
						>
							<source src={Yoryen} type="video/mp4" />
							<h1> Science of Coffee </h1>
						</video>

						<div
							className="herocustom d-flex justify-content-center"
							style={{ zIndex: '-2' }}
						></div>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div>
						<video
							autoPlay
							loop
							muted
							style={{
								position: 'absolute',
								width: '50%',
								left: '50%',
								right: '50%',
								top: '50%',
								height: 'auto',
								objectFit: 'cover',
								transform: 'translate(-50%, -50%)',
								zIndex: '-1',
								marginTop: 100,
								marginBottom: 0,
								border: '1px black solid',
							}}
							className="my-5"
						>
							<source src={Yoryen} type="video/mp4" />
							<h1> Science of Coffee </h1>
						</video>

						<div
							className="herocustom d-flex justify-content-center"
							style={{ zIndex: '-2' }}
						></div>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div>
						<video
							autoPlay
							loop
							muted
							style={{
								position: 'absolute',
								width: '50%',
								left: '50%',
								right: '50%',
								top: '50%',
								height: 'auto',
								objectFit: 'cover',
								transform: 'translate(-50%, -50%)',
								zIndex: '-1',
								marginTop: 100,
								marginBottom: 0,
								border: '1px black solid',
							}}
							className="my-5"
						>
							<source src={Yoryen} type="video/mp4" />
							<h1> Science of Coffee </h1>
						</video>

						<div
							className="herocustom d-flex justify-content-center"
							style={{ zIndex: '-2' }}
						></div>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Hero;
