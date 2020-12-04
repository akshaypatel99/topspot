import axios from 'axios';

export const createPlaylist = async (
	userId,
	token,
	timeRange,
	playlistURIs
) => {
	let name;
	let date =
		new Date().getDate().toString() +
		'/' +
		new Date().getMonth().toString() +
		'/' +
		new Date().getFullYear().toString();
	if (timeRange === 'long_term') {
		name = 'TOP 50 - All Time ' + date;
	} else if (timeRange === 'medium_term') {
		name = 'TOP 50 - Last 6 Months' + date;
	} else if (timeRange === 'short_term') {
		name = 'TOP 50 - Last Month' + date;
	}

	if (!playlistURIs.length) {
		return;
	}

	const headers = { Authorization: `Bearer ${token}` };
	const response = await axios.post(
		`https://api.spotify.com/v1/users/${userId}/playlists`,
		{
			headers: headers,
			method: 'POST',
			body: JSON.stringify({ name: name }),
		}
	);
	console.log(response.data);
	const playlistId = response.data.id;
	return axios.post(
		`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
		{
			headers: headers,
			method: 'POST',
			body: JSON.stringify({ uris: playlistURIs }),
		}
	);
};

export const savePlaylist = async (timeRange, playlistURIs, token) => {
	let name;
	let date =
		new Date().getDate().toString() +
		'/' +
		new Date().getMonth().toString() +
		'/' +
		new Date().getFullYear().toString();
	if (timeRange === 'long_term') {
		name = 'TOP 50 - All Time ' + date;
	} else if (timeRange === 'medium_term') {
		name = 'TOP 50 - Last 6 Months ' + date;
	} else if (timeRange === 'short_term') {
		name = 'TOP 50 - Last Month ' + date;
	} else {
		name = 'TOP 50 - created with TOPSpot';
	}

	if (!playlistURIs.length) {
		return;
	}

	const headers = { Authorization: `Bearer ${token}` };
	let userId;

	const response = await fetch('https://api.spotify.com/v1/me', {
		headers: headers,
	});
	const jsonResponse = await response.json();
	userId = jsonResponse.id;
	const response_1 = await fetch(
		`https://api.spotify.com/v1/users/${userId}/playlists`,
		{
			headers: headers,
			method: 'POST',
			body: JSON.stringify({ name: name }),
		}
	);
	const jsonResponse_1 = await response_1.json();
	const playlistId = jsonResponse_1.id;
	return fetch(
		`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
		{
			headers: headers,
			method: 'POST',
			body: JSON.stringify({ uris: playlistURIs }),
		}
	);
};
