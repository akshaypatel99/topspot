import React, { useEffect, useState, Suspense, useRef } from 'react';
import { useStateValue } from '../store/StateProvider';
import { fetchTopTracks } from '../util/toptracks';
import TrackCard from '../components/TrackCard';
import ListItem from '../components/ListItem';
import Loader from '../components/UI/Loader';
import Tooltip from '../components/UI/Tooltip';
import Modal from '../components/Modal';

import './TopTracks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faListAlt,
	faPlusCircle,
	faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { savePlaylist } from '../util/createPlaylist';

const TopTracks = () => {
	const [{ token }, dispatch] = useStateValue();
	const [tracks, setTracks] = useState(null);
	const [timeRange, setTimeRange] = useState('medium_term');
	const [playlistURIs, setPlaylistURIs] = useState([]);
	const [show, setShow] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const topTracks = await fetchTopTracks(token, timeRange);
			setTracks(topTracks);
		}
		fetchData();
	}, [token, timeRange, playlistURIs, dispatch]);

	const longTimeRangeToggler = () => {
		setTimeRange('long_term');
	};
	const mediumTimeRangeToggler = () => {
		setTimeRange('medium_term');
	};
	const shortTimeRangeToggler = () => {
		setTimeRange('short_term');
	};

	const createTracklist = () => {
		if (tracks) {
			const trackList = tracks.map((t) => t.uri);
			console.log(trackList);
			setPlaylistURIs(trackList);
		}
	};

	const createPlaylistHandler = (e) => {
		createTracklist();
		savePlaylist(timeRange, playlistURIs, token);
		setShow(true);
	};

	const hideModal = (e) => {
		setShow(false);
	};

	const scrollTable = useRef(null);

	const scrollSmoothHandler = () => {
		scrollTable.current.scrollIntoView({ behavior: 'smooth' });
	};

	let list = <Loader />;
	let table = null;

	if (tracks) {
		list = tracks.slice(0, 10).map((track, i) => (
			<div key={track.id}>
				<TrackCard
					number={i}
					id={track.id}
					name={track.name}
					artist={track.artist}
					image1={track.image1}
					uri={track.uri}
				/>
				<div className='bottom-line'></div>
			</div>
		));

		table = tracks.map((track, i) => (
			<div key={track.uri}>
				<ListItem
					number={i}
					image={track.image2}
					data1={track.name}
					data2={track.artist}
				/>
				<div className='bottom-line'></div>
			</div>
		));
	}

	return (
		<div className='TopTracks'>
			<div className='TopTracks-Header'>
				<h1>
					<span>TOP</span>Tracks
				</h1>
			</div>
			<div className='TopTracks-Menu'>
				<ul>
					<li
						className={timeRange === 'long_term' ? 'current' : null}
						onClick={(e) => longTimeRangeToggler()}
					>
						All Time
					</li>
					<li
						className={timeRange === 'medium_term' ? 'current' : null}
						onClick={(e) => mediumTimeRangeToggler()}
					>
						Past 6 Months
					</li>
					<li
						className={timeRange === 'short_term' ? 'current' : null}
						onClick={(e) => shortTimeRangeToggler()}
					>
						Past Month
					</li>
				</ul>
				<div>
					<Tooltip content='See all results' direction='top'>
						<button className='btn-secondary' onClick={scrollSmoothHandler}>
							<FontAwesomeIcon icon={faListAlt} size='1x' /> See All Results
						</button>
					</Tooltip>
					<Tooltip
						content='Clicking will create a playlist of your results to Spotify'
						direction='bottom'
					>
						<button className='btn-secondary' onClick={createPlaylistHandler}>
							<FontAwesomeIcon icon={faPlusCircle} size='1x' /> Create Playlist
						</button>
					</Tooltip>
				</div>
			</div>
			<div className='TopTracks-Playlist'>
				<Modal show={show} handleClose={(e) => hideModal()}>
					<div className='Modal-main-content'>
						<h1>
							<span>Playlist</span> Created
						</h1>
						<div>
							<FontAwesomeIcon icon={faThumbsUp} size='2x' />
						</div>
						<p>
							Check out your new{' '}
							<a
								href='https://open.spotify.com/collection/playlists'
								target='_blank'
								rel='noreferrer'
							>
								<span>playlist</span>
							</a>{' '}
							in your Spotify Library.
						</p>
					</div>
				</Modal>
			</div>
			<Suspense fallback={<Loader />}>
				<div className='TopTracks-Content'>
					{list}
					<div ref={scrollTable} className='py-1'></div>
					<div className='TopTracks-Content-Table'>
						<h1>
							<span>All</span>Tracks
						</h1>
						{table}
					</div>
				</div>
			</Suspense>
		</div>
	);
};

export default TopTracks;
