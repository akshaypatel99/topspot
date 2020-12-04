import React from 'react';
import logoImg from '../../assets/Spotify_Logo_RGB_White.png';
import './Logo.scss';

const Logo = () => {
	return (
		<div className='Logo'>
			<img src={logoImg} alt='Spotify logo' />
		</div>
	);
};

export default Logo;
