//Import React
import React from "react";

//Create Form Component
const Form = (props) => {
  //state for formData
  const [formData, setFormData] = React.useState(props.song);

  //handleSubmit function to lift data to App
  const handleSubmit = (event) => {
    event.preventDefault(); //Prevent Form from Refreshing
    props.handleSubmit(formData); //Submit to App's desired function
    props.history.push("/"); //Push back up to display section
  };

  //HandleChange function to set formData to input from form
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label id="title" for="formTitle">
        Title
      </label>
      <br />
      <input
        type="text"
        id="form-title"
        name="formTitle"
        value={formData.title}
        onChange={handleChange}
      />
      <br />
      <label id="artist" for="formArtist">
        Artist
      </label>
      <br />
      <input
        type="text"
        id="form-artist"
        name="formArtist"
        value={formData.artist}
        onChange={handleChange}
      />
      <br />
      <label id="time" for="formTime">
        Time
      </label>
      <br />
      <input
        type="text"
        id="form-time"
        name="formTime"
        value={formData.time}
        onChange={handleChange}
      />
      <br />
      <input id="createButton" type="submit" value={props.label} />
    </form>
  );
};

export default Form;
