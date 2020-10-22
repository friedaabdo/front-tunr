//import React
import React from 'react';

//Create Playlist Component
const Playlist = (props) => {
	const playlistSongs = () => {
		<div id='song-list'>
			{props.songs.map((song) => {
				<article>
					<section className='song-title'>{song.title}</section> //display song
					title
					<section>{song.time}</section> //display song time length
					<section>{song.artist}</section> //display song artist
					<section
						className='delete'
						onClick={() => {
							props.removeSong(song);
							props.history.push('/delete');
						}}>
						X
					</section>
					//remove song from playlist
				</article>;
			})}
		</div>;
	};

	return props.songs.length > 0 ? playlistSongs() : <h1>Add Some Songs!</h1>;
};

export default Playlist;
