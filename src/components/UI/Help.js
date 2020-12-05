import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';

import './Help.scss';

const Help = () => {
	const [show, setShow] = useState(false);

	const showModal = (e) => {
		setShow(true);
	};

	const hideModal = (e) => {
		setShow(false);
	};

	let about = (
		<div className='Help-Info'>
			<Modal show={show} handleClose={(e) => hideModal()}>
				<h1>
					<span>TOP</span>Spot
				</h1>
				<p>
					Ever wondered who are your most listened to artists and tracks on
					Spotify?
				</p>
				<p>
					With <span>TOP</span>Spot you can see your <span>TOP</span>50* artists
					and tracks from the past month, 6 months and of all time.
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
		</div>
	);

	return (
		<div>
			<FontAwesomeIcon
				icon={faQuestionCircle}
				className='Help'
				onClick={showModal}
				size='4x'
			/>
			{about}
		</div>
	);
};

export default Help;
