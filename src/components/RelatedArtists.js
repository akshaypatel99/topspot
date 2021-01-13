import React, { useEffect, useState } from 'react';
import { useStateValue } from '../store/StateProvider';
import { relatedArtists } from '../util/relatedArtists';

const RelatedArtists = ({ id }) => {
	const [{ token }, dispatch] = useStateValue();
	const [relArtist, setRelArtist] = useState(null);

	useEffect(() => {
		relatedArtists(id, token).then((artists) => {
			setRelArtist(artists);
		});
	}, [token, dispatch, id]);

	let related = <div>No related artists found.</div>;

	if (relArtist && relArtist !== []) {
		related = relArtist.slice(0, 2).map((artist, i) => {
			return <div key={i}>{artist.name}</div>;
		});
	}

	return (
		<div className='RelatedArtists'>
			<h4>Related Artists:</h4>
			<span>{related}</span>
		</div>
	);
};

export default RelatedArtists;
