import React, {useState} from "react";
import "./App.css";
import Favorites from "./Components/Favorites";
import {Route, Link, Switch} from 'react-router-dom'
import Form from "./Components/Form"

function App() {
 const url = 'http://localhost:3500'

 const [songs, setSongs] = useState([])

 const getSongs = () => {
   fetch(url + '/song')
   .then(res => res.json())
   .then(data => setSongs(data))
 }

const emptySong = {
  Title: '',
  Artist: '',
  Time: ''
}

 //some state here to grab favorites
 const [faves, setFaves] = React.useState([])
 const handleFaveToggle = (song) => {
   const newFaves = [...faves]
 const favorites = newFaves.indexOf(song)
 if (favorites === -1) {
   newFaves.push(song)
 } else {
   newFaves.splice(favorites,1)
 }
 setFaves(newFaves)
 }
 

  return (

    <div className="App">
      <h1>Tunr.</h1>
      <h2>For all your playlist needs</h2>

      <Form emptySong={emptySong}/>
    <Route path='/favorites'><Favorites faves={faves} onFaveToggle={handleFaveToggle}/></Route>
    </div>
  );

}

export default App;
