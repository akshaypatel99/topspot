import React, { useEffect, useState, Suspense, useRef } from 'react';
import { useStateValue } from '../store/StateProvider';
import { fetchTopArtists } from '../util/topartists';
import Card from '../components/Card';
import ListItem from '../components/ListItem';
import Loader from '../components/UI/Loader';
import Tooltip from '../components/UI/Tooltip';

import './TopArtists.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

const TopArtists = () => {
	const [{ token }, dispatch] = useStateValue();
	const [artists, setArtists] = useState(null);
	const [timeRange, setTimeRange] = useState('medium_term');

	useEffect(() => {
		fetchTopArtists(token, timeRange).then((artists) => {
			console.dir(artists);
			setArtists(artists);
		});
	}, [token, timeRange, dispatch]);

	const longTimeRangeToggler = () => {
		setTimeRange('long_term');
	};
	const mediumTimeRangeToggler = () => {
		setTimeRange('medium_term');
	};
	const shortTimeRangeToggler = () => {
		setTimeRange('short_term');
	};

	let current = 'current';

	const scrollTable = useRef(null);

	const scrollSmoothHandler = () => {
		scrollTable.current.scrollIntoView({ behavior: 'smooth' });
	};

	let list = <Loader />;
	let table = null;

	if (artists) {
		list = artists.slice(0, 10).map((artist, i) => (
			<div key={artist.id}>
				<Card
					number={i}
					id={artist.id}
					name={artist.name}
					image1={artist.image1}
					spotifyUrl={artist.spotifyUrl}
					popularity={artist.popularity}
					genre1={artist.genres.primary}
					genre2={artist.genres.secondary}
				/>
				<div className='bottom-line'></div>
			</div>
		));

		table = artists.map((artist, i) => (
			<div key={artist.uri}>
				<ListItem
					number={i}
					image={artist.image2}
					data1={artist.name}
					data2={artist.genres.primary}
				/>
				<div className='bottom-line'></div>
			</div>
		));
	}

	return (
		<div className='TopArtists'>
			<div className='TopArtists-Header'>
				<h1>
					<span>TOP</span>Artists
				</h1>
			</div>
			<div className='TopArtists-Menu'>
				<ul>
					<li
						className={timeRange === 'long_term' && current}
						onClick={(e) => longTimeRangeToggler()}
					>
						All Time
					</li>
					<li
						className={timeRange === 'medium_term' && current}
						onClick={(e) => mediumTimeRangeToggler()}
					>
						Past 6 Months
					</li>
					<li
						className={timeRange === 'short_term' && current}
						onClick={(e) => shortTimeRangeToggler()}
					>
						Past Month
					</li>
				</ul>
				<div>
					<Tooltip content='See all results' direction='bottom'>
						<button className='btn-secondary' onClick={scrollSmoothHandler}>
							<FontAwesomeIcon icon={faListAlt} size='1x' /> See All Results
						</button>
					</Tooltip>
				</div>
			</div>
			<Suspense fallback={<Loader />}>
				<div className='TopArtists-Content'>
					{list}
					<div ref={scrollTable} className='py-1'></div>
					<div className='TopArtists-Content-Table'>
						<h1>
							<span>All</span>Artists
						</h1>
						{table}
					</div>
				</div>
			</Suspense>
		</div>
	);
};

export default TopArtists;
