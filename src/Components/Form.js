import React from 'react';

const Form = (props) => {
    const handleSubmit = 
    
    return (
		<form>
			<label for='formTitle'>Title</label>
			<br />
			<input type='text' id='form-title' name='formTitle' />
			<br />
			<label for='formArtist'>Artist</label>
			<br />
			<input type='text' id='form-artist' name='formArtist' />
			<br />
			<label for='formTime'>Time</label>
			<br />
			<input type='text' id='form-title' name='formTime' />
			<br />
			<input type='submit' value='submit'>
				Add New Song
			</input>
		</form>
	);
};

export default Form;
