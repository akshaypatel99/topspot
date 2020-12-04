import React from 'react';
import TrackFeatures from './TrackFeatures';

import './TrackCard.scss';

const TrackCard = ({ number, id, name, artist, image1, uri }) => {
	return (
		<div className='TrackCard'>
			<div className='TrackCard-Number'>
				<h1>{number + 1}</h1>
			</div>
			<div className='TrackCard-Media'>
				{/* <iframe
					title={id}
					src={`https://open.spotify.com/embed?uri=${uri}`}
					width='300'
					height='380'
					frameBorder='0'
					allowtransparency='true'
					allow='encrypted-media'
					referrerPolicy='no-referrer'
				></iframe> */}
				<img src={image1} alt='album art' />
			</div>
			<div className='TrackCard-Body'>
				<div className='TrackCard-Title'>
					<h1>{name}</h1>
					<div className='bottom-line-short'></div>
					<h2>{artist}</h2>
				</div>
				<div className='TrackCard-Features'>
					<TrackFeatures id={id} />
				</div>
			</div>
		</div>
	);
};

export default TrackCard;
