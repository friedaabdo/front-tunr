//import React
import React from 'react';
import FaveIcon from './FaveIcon';

//Create Playlist Component
const Playlist = (props) => {
	const playlistSongs = () => (
		<div id='song-list'>
			{props.songs.map((song) => (
				<article>
					<section className='song-title'>{song.title}</section> 
					<section>{song.time}</section> 
					<section>{song.artist}</section> 
					<section
						className='delete'
						onClick={() => {
							props.removeSong(song);
							props.history.push('/delete');
						}}>
						X
					</section>
					<FaveIcon />
				</article>
            ))}
		</div>
    );

	return props.songs.length > 0 ? playlistSongs() : <h1>Add Some Songs!</h1>;
};

export default Playlist;
