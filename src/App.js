import { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useStateValue } from './store/StateProvider';
import { getAccessToken } from './util/spotify';

import './App.scss';
import Landing from './containers/Landing';
import Home from './containers/Home';
import TopArtists from './containers/TopArtists';
import TopTracks from './containers/TopTracks';
import NavBar from './components/UI/NavBar';
import Footer from './components/UI/Footer';
import ScrollTopArrow from './components/UI/ScrollTopArrow';
import { fetchUserData } from './util/user';

const App = () => {
	const [{ token }, dispatch] = useStateValue();

	useEffect(() => {
		const accessToken = getAccessToken();

		if (accessToken) {
			dispatch({
				type: 'SET_TOKEN',
				token: accessToken,
			});

			fetchUserData(accessToken).then((userData) => {
				dispatch({
					type: 'SET_USER',
					user: userData,
				});
			});
		}
	}, [token, dispatch]);

	let routes = (
		<BrowserRouter>
			<Route path='/' exact component={Landing} />
		</BrowserRouter>
	);

	if (token) {
		routes = (
			<BrowserRouter>
				<div>
					<NavBar />
					<Switch>
						<Route path='/topartists' component={TopArtists} />
						<Route path='/toptracks' component={TopTracks} />
						<Route path='/' exact component={Home} />
						<Redirect to='/' exact component={Home} />
					</Switch>
					<ScrollTopArrow />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}

	return (
		<div className='App'>
			<div className='container'>{routes}</div>
		</div>
	);
};

export default App;
