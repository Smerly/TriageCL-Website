import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TriageLogoWhite from './images/Triage-Logo-White.png';
import { NavLink } from 'react-router-dom';

function Footer() {
	return (
		<div className="testo">
			<div>
				<img
					src={TriageLogoWhite}
					style={{ width: 300 }}
					className="img-fluid"
				/>
			</div>
			<div
				className="my-5"
				style={{
					height: 1,
					width: 500,
					border: '2px white solid',
					borderRadius: 30,
				}}
			></div>
			<div className="row">
				<div className="col-sm mx-5 text-center">
					<h2 style={{ color: 'white', fontSize: 40, fontWeight: 200 }}>
						{' '}
						Contact Us{' '}
					</h2>
					<div
						className="mx-5 mb-2 center"
						style={{
							height: 1,
							width: 100,
							border: '1px white solid',
							borderRadius: 30,
						}}
					></div>
					<div className="my-4">
						<header
							className="footerp mt-4"
							style={{ borderBottom: '1px white solid' }}
						>
							{' '}
							Founder Email{' '}
						</header>

						<p className="footerp" style={{ fontSize: 13 }}>
							{' '}
							XXXXXXXXXXXXX@yahoo.com{' '}
						</p>

						<header
							className="footerp mt-4"
							style={{ borderBottom: '1px white solid' }}
						>
							{' '}
							Shop Email{' '}
						</header>

						<p className="footerp" style={{ fontSize: 13 }}>
							{' '}
							triage@triagecr.com{' '}
						</p>

						<header
							className="footerp mt-4"
							style={{ borderBottom: '1px white solid' }}
						>
							{' '}
							Phone Number{' '}
						</header>

						<p className="footerp"> (510) XXX-3250</p>
					</div>
				</div>

				<div
					className="mx-5 center"
					style={{
						height: 200,
						width: 1,
						border: '1px white solid',
						borderRadius: 30,
					}}
				></div>

				{/* 2ND */}

				<div className="col-sm mx-5 text-center">
					<h2 style={{ color: 'white', fontSize: 40, fontWeight: 200 }}>
						{' '}
						Locations{' '}
					</h2>
					<div
						className="mx-5 mb-2 center"
						style={{
							height: 1,
							width: 100,
							border: '1px white solid',
							borderRadius: 30,
						}}
					></div>
					<div className="my-4">
						<NavLink
							to={`/location`}
							className="customlink2"
							style={{ textDecoration: 'none' }}
						>
							{' '}
							<p>Alameda</p>
						</NavLink>

						<NavLink
							to={`/location`}
							className="customlink2"
							style={{ textDecoration: 'none' }}
						>
							{' '}
							<p>San Francisco</p>
						</NavLink>

						<NavLink
							to={`/location`}
							className="customlink2"
							style={{ textDecoration: 'none' }}
						>
							{' '}
							<p>San Jose</p>
						</NavLink>
					</div>
				</div>

				<div
					className="mx-5 center"
					style={{
						height: 200,
						width: 1,
						border: '1px white solid',
						borderRadius: 30,
					}}
				></div>

				{/* 3RD */}

				<div className="col-sm mx-5 text-center">
					<h2 style={{ color: 'white', fontSize: 40, fontWeight: 200 }}>
						{' '}
						News{' '}
					</h2>
					<div
						className="mx-5 mb-2 center"
						style={{
							height: 1,
							width: 100,
							border: '1px white solid',
							borderRadius: 30,
						}}
					></div>
					<div className="my-4">
						<a
							href="#"
							className="customlink2"
							style={{ textDecoration: 'none' }}
						>
							{' '}
							<p> General </p>
						</a>

						<a
							href="#"
							className="customlink2"
							style={{ textDecoration: 'none' }}
						>
							{' '}
							<p> Events </p>
						</a>

						<a
							href="#"
							className="customlink2"
							style={{ textDecoration: 'none' }}
						>
							{' '}
							<p> Coffee Cycles </p>
						</a>
					</div>
				</div>
			</div>
			© Copyright. Ernest Cheung, Lawrence Cheung, Triage
		</div>
	);
}

export default Footer;
