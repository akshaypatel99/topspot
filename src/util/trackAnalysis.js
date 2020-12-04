import axios from 'axios';

export const trackAnalysis = async (trackId, token) => {
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/audio-features/${trackId}`,
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log(response.data);
		const analysis = response.data;
		return analysis;
	} catch (error) {
		console.log(error);
	}
};
