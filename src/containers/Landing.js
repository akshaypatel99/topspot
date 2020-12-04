import React, { useState } from 'react';
import Logo from '../components/UI/Logo';
import { loginUrl } from '../util/spotify';

import Modal from '../components/Modal';
import './Landing.scss';

const Landing = () => {
	const [show, setShow] = useState(false);

	const showModal = (e) => {
		setShow(true);
	};

	const hideModal = (e) => {
		setShow(false);
	};

	return (
		<div className='Landing'>
			<div className='Landing-AppName'>
				<h1>
					<span>TOP</span>Spot
				</h1>
			</div>
			<div className='Landing-Logo'>
				<h3>Powered by</h3>
				<Logo />
			</div>
			<div className='Landing-Info'>
				<Modal show={show} handleClose={(e) => hideModal()}>
					<h1>
						<span>TOP</span>Spot
					</h1>
					<p>
						Ever wondered who are your most listened to artists and tracks on
						Spotify?
					</p>
					<p>
						With <span>TOP</span>Spot you can see your <span>TOP</span>50*
						artists and tracks from the past month, 6 months and of all time.
					</p>
					<p>
						Create a playlist of your <span>TOP</span>50 tracks and save them
						directly to your Spotify account.
					</p>
					<p>
						To use <span>TOP</span>Spot you must be a{' '}
						<a href='https://www.spotify.com/uk/premium/'>
							<span>Spotify Premium</span>
						</a>{' '}
						user.
					</p>
					<p>This app does not store any of your Spotify data.</p>
					<p>*Up to 50 artists and tracks</p>
				</Modal>

				<button
					className='btn-secondary'
					onClick={(e) => {
						showModal();
					}}
				>
					About TOPSpot
				</button>
			</div>
			<div className='Landing-Link'>
				<a href={loginUrl} className='btn-primary'>
					PROCEED TO LOGIN
				</a>
			</div>
		</div>
	);
};

export default Landing;
