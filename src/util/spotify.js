const authEndPoint = 'https://accounts.spotify.com/authorize';
const clientId = '8b4aa42a221243639e4ca355ddc45ffd';
const redirectUri = 'https://topspot-app.herokuapp.com/';
const response_type = ['token', 'code'];
const scopes = [
	'user-top-read',
	'user-read-private',
	'user-follow-read',
	'playlist-modify-public',
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&response_type=${
	response_type[0]
}&scope=${scopes.join('%20')}&redirect_uri=${redirectUri}`;

export const getAccessToken = () => {
	let accessToken;
	const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
	if (accessTokenMatch) {
		accessToken = accessTokenMatch[1];
		localStorage.setItem('accTkn', JSON.stringify(accessToken));
	}
	return accessToken;
};

export const checkLogin = (history) => {
	const accessToken = localStorage.getItem('accTkn');

	if (!accessToken) {
		history.replace('/login');
	}

	return;
};
