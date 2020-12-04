import React, { useEffect, useState } from 'react';
import { useStateValue } from '../store/StateProvider';
import { trackAnalysis } from '..//util/trackAnalysis';
import ProgressBar from './UI/ProgressBar';

const TrackFeatures = ({ id }) => {
	const [{ token }, dispatch] = useStateValue();
	const [features, setFeatures] = useState(null);

	useEffect(() => {
		trackAnalysis(id, token).then((analysis) => {
			setFeatures(analysis);
		});
	}, [token, dispatch, id]);

	let trackFeature = null;

	if (features) {
		trackFeature = (
			<div className='TrackFeatures'>
				<ProgressBar title='Danceability' width={features.danceability * 100} />
				<ProgressBar title='Energy' width={features.energy * 100} />
				<ProgressBar title='Loudness' width={(features.loudness / 2) * -10} />
				<ProgressBar title='Positivity' width={features.valence * 100} />
			</div>
		);
	} else {
		trackFeature = (
			<div className='TrackFeatures'>
				<h2>Sorry, Audio Features is unavailable for this track.</h2>
			</div>
		);
	}

	return trackFeature;
};

export default TrackFeatures;
