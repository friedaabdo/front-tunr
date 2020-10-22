//import React
import React from "react";

//Create Playlist Component
const Playlist = (props) => {

	
    let songs = props.songs.data;
    
    
	return ( <>
		{songs ? (<div id='song-list'>
					{songs.map((song) => (
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
						</article>
					))}
				</div>) : <h1>Add Some Songs!</h1>
        }
    </>
    );

};

export default Playlist;
