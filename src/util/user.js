import axios from 'axios';

export const fetchUserData = async (token) => {
	try {
		const config = {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};

		const { data } = await axios.get('https://api.spotify.com/v1/me', config);
		return data;
	} catch (error) {
		console.error(error);
	}
};
