import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Founder from '../images/Founder.jpeg';
function Story() {
	return (
		<div>
			<div
				className="text-center mt-5"
				style={{ width: '100vw' }}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<h1 className="titlecustom" style={{ fontSize: 64 }}>
					{' '}
					Our Story
				</h1>
				<header
					className="roboto"
					style={{ fontWeight: 100, fontSize: 24, marginTop: -15 }}
				>
					{' '}
					The result of our passion for achieving perfection.
				</header>

				<p className="story-top pcustom">
					We take two things to an incredibly high standard: quality and
					consistency. We can’t express how many times we’ve experienced a
					shop’s coffee at its best and at its worst in the span of a week. We
					are committed to providing a consistent experience that you will be
					able to enjoy again and again.
				</p>

				{/*  */}

				{/*  */}

				{/*  */}

				<div className="row-resp-founder mt-5">
					<img
						src={Founder}
						alt="Founder Photo"
						className="founder-photo img-fluid"
					/>
					<div className="founder-text-box p-5 mt-5">
						<div className="founder-title mr-5">
							<header className="our-founder roboto"> Our Founder</header>
							<h2 className="lawrence-cheung roboto ml-5"> Lawrence Cheung</h2>
						</div>
						<div className="row text-center">
							<p className="less320pxw roboto ml-4 column">
								My passion for maximizing the flavors of coffee started in the
								heights of San Francisco. For the majority of my adolescence,
								the complex flavors of coffee intrigued me. Naturally, I seeked
								out what else was possible to enhance the fruit’s flavors to its
								max potential. Learning from coffee shop to coffee shop, I
								improved my intuition and knowledge in both the roasting process
								of the coffee bean and technique in using the best equipment in
								transfering the flavors from the raw coffee bean to a
								caffeinated beverage. I explored the best of the best in all
								different parts of the world to perfect my coffee.
							</p>
						</div>

						<header className="story-under-header triage">
							{' '}
							Now, I am here to share my experiences by telling my story in a
							cup.{' '}
						</header>
					</div>

					{/* <div className="column p-5 mt-5 ml-5">
						<div className="mr-5">
							<header
								className="roboto"
								style={{ marginRight: 450, fontSize: '1.3vw' }}
							>
								{' '}
								Our Founder
							</header>
							<h2
								className="roboto ml-5"
								style={{ fontWeight: 700, fontSize: '3.7vw' }}
							>
								{' '}
								Lawrence Cheung
							</h2>
						</div>
						<div className="row text-center">
							<p
								className="less320pxw roboto ml-4 column"
								style={{
									textAlign: 'left',
									// width: 800,
									marginTop: 10,
									fontSize: 24,
								}}
							>
								My passion for maximizing the flavors of coffee started in the
								heights of San Francisco. For the majority of my adolescence,
								the complex flavors of coffee intrigued me. Naturally, I seeked
								out what else was possible to enhance the fruit’s flavors to its
								max potential. Learning from coffee shop to coffee shop, I
								improved my intuition and knowledge in both the roasting process
								of the coffee bean and technique in using the best equipment in
								transfering the flavors from the raw coffee bean to a
								caffeinated beverage. I explored the best of the best in all
								different parts of the world to perfect my coffee.
							</p>
						</div>

						<header
							className="triage ml-5"
							style={{
								textAlign: 'left',
								fontSize: '2.01vw',
								fontWeight: 600,
								width: 800,
							}}
						>
							{' '}
							Now, I am here to share my experiences by telling my story in a
							cup.{' '}
						</header>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Story;
