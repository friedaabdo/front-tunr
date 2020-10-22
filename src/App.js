import React, { useState } from 'react';
import './App.css';
//import Favorites from './Components/Favorites';
import { Route, Link, Switch } from 'react-router-dom';
import Playlist from './Components/Playlist';
import Form from './Components/Form';

function App() {
	// URL for backend data
	const url = 'https://tunr1.herokuapp.com';
	// State to hold song list
	const [songs, setSongs] = useState([]);

	//Empty song for Form
	const emptySong = {
		Title: '',
		Artist: '',
		Time: '',
	};

	//Fetch to get songs from backend
	const getSongs = () => {
		fetch(url + '/song/')
			.then((res) => res.json())
      .then((data) => setSongs(data));
  };

	//Get songs on page load
	React.useEffect(() => {
		getSongs();
	}, []);

	//handleCreate Function for creating songs in playlist
	const handleCreate = (newSong) => {
		fetch(url + '/song/', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSong),
		});
	};

	//deleteSong Function for deleting a song from playlist
	const removeSong = (song) => {
		fetch(url + '/song/' + song._id, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			getSongs();
		});
	};

	//some state here to grab favorites
	/* const [faves, setFaves] = React.useState([]);
	const handleFaveToggle = (song) => {
		const newFaves = [...faves];
		const favorites = newFaves.indexOf(song);
		if (favorites === -1) {
			newFaves.push(song);
		} else {
			newFaves.splice(favorites, 1);
		}
		setFaves(newFaves);
	}; */

	//Return App structure
	return (
		<div className='App'>
			<header>
				<h1 id='head-title'>Tunr.</h1>
				<h2 id='head-subtitle'>For all your playlist needs</h2>
				<hr id='red-divider' />
			</header>
			<div id='playlist-div'>
				<h1 id='playlist-head'>Playlist 1</h1>
				<Playlist songs={songs} removeSong={removeSong} />
			</div>
			{/* <Route path='/favorites'>
				<Favorites faves={faves} onFaveToggle={handleFaveToggle} />
			</Route> */}
			<Route
				exact
				path='/'
				render={(rp) => (
					<Form label='create' {...rp} song={emptySong} handleSubmit={handleCreate} />
				)}
			/>
		</div>
	);
}

export default App;
