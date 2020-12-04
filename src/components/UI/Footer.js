import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div className='Footer container py-1'>
			<a
				href='https://github.com/akshaypatel99'
				target='_blank'
				rel='noreferrer'
			>
				<FontAwesomeIcon icon={faGithub} size='2x' color='white' />
			</a>
		</div>
	);
};

export default Footer;
