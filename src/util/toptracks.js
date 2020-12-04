import axios from 'axios';

export const fetchTopTracks = async (token, timeRange) => {
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=50&offset=0`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log(response.data);
		if (!response.data.items) {
			return [];
		}
		return response.data.items.map((track) => ({
			id: track.id,
			name: track.name,
			artist: track.artists[0].name,
			image1: track.album.images[1].url,
			image2: track.album.images[2].url,
			spotifyUrl: track.external_urls.spotify,
			uri: track.uri,
		}));
	} catch (error) {
		console.log(error);
	}
};
