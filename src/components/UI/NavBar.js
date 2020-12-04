import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './NavBar.scss';

const NavBar = () => {
	return (
		<div id='navbar' className='NavBar container'>
			<FontAwesomeIcon icon={faSpotify} size='2x' />
			<div className='NavBar-Menu'>
				<ul>
					<li>
						<NavLink
							to='/'
							exact
							activeStyle={{
								borderColor: '#1db954',
							}}
						>
							<FontAwesomeIcon icon={faHome} size='lg' />
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/topartists'
							activeStyle={{
								borderColor: '#1db954',
							}}
						>
							<span>TOP</span>Artists
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/toptracks'
							activeStyle={{
								borderColor: '#1db954',
							}}
						>
							<span>TOP</span>Tracks
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
