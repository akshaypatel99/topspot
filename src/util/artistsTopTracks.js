import axios from 'axios';

export const fetchArtistsTopTracks = async (token, artistId) => {
	try {
		const response = await axios.get(
			`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=from_token`,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		console.log(response.data);
		if (!response.data.tracks) {
			return [];
		}
		const artTopTracks = response.data.tracks
			.slice(0, 3)
			.map((track) => track.uri);
		console.log(artTopTracks);
		return artTopTracks;
	} catch (error) {
		console.log(error);
	}
};

export const fetchTopArtistsTopTracks = async (artists, token) => {
	const artistIds = artists.map((artist) => artist.id);
	let artistsTracks = await Promise.all(
		artistIds.map((id) => fetchArtistsTopTracks(token, id))
	);
	return artistsTracks.flat();
};
