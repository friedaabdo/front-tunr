import React, {useState} from "react";
import "./App.css";
import Favorites from "./Components/Favorites";
import {Route, Link, Switch} from 'react-router-dom'
import Form from "./Components/Form"

function App() {
 const url = 'http://localhost:3500'

 const [songs, setSongs] = useState([])

 const getSongs = () => {
   fetch(url + '/song/')
   .then(res => res.json())
   .then(data => setSongs(data))
 }

const emptySong = {
  Song: '',
  Artist: '',
  Time: ''
}

  return (

    <div className="App">
      <h1>Tunr.</h1>
      <h2>For all your playlist needs</h2>
      <Form emptySong={emptySong}/>
    <Route path='/favorites'><Favorites /></Route>
    </div>
  );

}

export default App;
