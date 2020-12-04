import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../store/StateProvider';
import Loader from '../components/UI/Loader';

import './Home.scss';

const Home = () => {
	const [{ user }, dispatch] = useStateValue();

	let listened = <Loader />;

	let userImg = null;

	if (user) {
		listened = (
			<div>
				<a href={user.external_urls.spotify} target='_blank' rel='noreferrer'>
					<span>{user.display_name}</span>
				</a>
				<h1>Take a look back at your most listened to artists and tracks.</h1>
			</div>
		);

		userImg = <img src={user.images[0].url} alt='Profile' />;
	}

	return (
		<Suspense fallback={<Loader />}>
			<div className='Home'>
				<div className='container'>
					<div className='Home-layout'>
						<div className='Home-header'>
							{userImg}
							{listened}
						</div>
						<div className='Home-content'>
							<Link to='/topartists' className='Home-link'>
								<span>TOP</span>Artists
							</Link>
							<div className='bottom-line-short'></div>
							<Link to='/toptracks' className='Home-link'>
								<span>TOP</span>Tracks
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Suspense>
	);
};

export default Home;
