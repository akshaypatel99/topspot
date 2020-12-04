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

	let related = null;

	if (relArtist) {
		related = (
			<div className='RelatedArtists'>
				<h4>
					Related Artists:{' '}
					<span>
						{relArtist.artists[0].name}, {relArtist.artists[1].name},{' '}
						{relArtist.artists[2].name}
					</span>
				</h4>
			</div>
		);
	}
	return related;
};

export default RelatedArtists;
