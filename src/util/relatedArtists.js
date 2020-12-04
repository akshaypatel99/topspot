import axios from 'axios';

export const relatedArtists = async (artistId, token) => {
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/artists/${artistId}/related-artists`,
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log(response.data);
		const relArtists = response.data;
		return relArtists;
	} catch (error) {
		console.log(error);
	}
};
