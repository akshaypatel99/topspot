import React from 'react';
import RelatedArtists from './RelatedArtists';

import './Card.scss';
import ProgressBar from './UI/ProgressBar';

const Card = ({
	number,
	id,
	name,
	image1,
	spotifyUrl,
	popularity,
	genre1,
	genre2,
}) => {
	let genres;
	if (!genre1) {
		genres = (
			<div className='Card-Genres'>
				<h4>Genres: </h4>
				<div className='badge1'>
					<span>No genres found</span>
				</div>
			</div>
		);
	} else {
		genres = (
			<div className='Card-Genres'>
				<h4>Genres: </h4>
				<div className='badge1'>
					<span>{genre1 ? genre1 : 'No genre found'}</span>
				</div>
				<div className='badge2'>
					<span>{genre2 ? genre2 : 'No genre found'}</span>
				</div>
			</div>
		);
	}

	return (
		<div className='Card'>
			<div className='Card-Image'>
				<div className='Card-Position'>
					<div className='Card-Position__Side Card-Position__Side--Front'>
						<img
							src={image1}
							alt='artist'
							className='Card-Position__Side Card-Position__Side--Front'
						/>
					</div>
					<div className='Card-Position__Side Card-Position__Side--Back'>
						<h1 className='Card-Position__Side Card-Position__Side--Back'>
							{number + 1}
						</h1>
					</div>
				</div>
			</div>
			<div className='Card-Body'>
				<div className='Card-Number'>
					<h1>{number + 1}</h1>
				</div>
				<div className='Card-Title'>
					<a href={spotifyUrl} target='_blank' rel='noreferrer'>
						<h1>{name}</h1>
					</a>
				</div>
				<div className='Card-Popularity'>
					<ProgressBar title='Popularity' width={popularity} />
				</div>
				{genres}
				<div className='Card-Related'>
					<RelatedArtists id={id} />
				</div>
			</div>
		</div>
	);
};

export default Card;
