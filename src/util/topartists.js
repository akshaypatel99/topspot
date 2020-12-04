import axios from 'axios';

export const fetchTopArtists = async (token, timeRange) => {
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}&limit=50&offset=0`,
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
		return response.data.items.map((artist) => ({
			id: artist.id,
			name: artist.name,
			popularity: artist.popularity,
			image1: artist.images[1].url,
			image2: artist.images[2].url,
			spotifyUrl: artist.external_urls.spotify,
			uri: artist.uri,
			genres: {
				primary: artist.genres[0],
				secondary: artist.genres[1],
			},
		}));
	} catch (error) {
		console.log(error);
	}
};
