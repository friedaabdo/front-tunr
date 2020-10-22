import React, {useState} from "react";
import "./App.css";
import Favorites from "./Components/Favorites";

function App() {
 const url = 'http://localhost:3500'

 const [songs, setSongs] = useState([])



  return (
    <div className="App">
      <h1>Tunr.</h1>
      <h2>For all your playlist needs</h2>
      <Favorites />
    </div>
  );
}

export default App;
