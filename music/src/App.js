import React ,  { useState } from "react";
import { useEffect } from "react";
import Player from "./components/player";


function App() {
  const [songs] = useState([
    {
    title : 'Through this joy I call life',
    artist : 'SIA', 
    img_src : "./images/OIP.jpeg",
    src: "./songs/Sia_-_Joy_I_Call_Life_CeeNaija.com_.mp3"
  },
  {
    title : 'Ride',
    artist : 'Twenty One Pilots', 
    img_src :"./images/R.jpeg",
    src: "./songs/Twenty-One-Pilots-Ride.mp3"
  },
  {
    title : 'Chlorine',
    artist : 'Twenty One Pilots', 
    img_src : "./images/OIP (1).jpeg",
    src: "./songs/Twenty-One-Pilots-Chlorine.mp3"
  }
])

const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);
  return (
    <div className="App">
       <Player currentSongIndex = {currentSongIndex }
       setCurrentSongIndex = {setCurrentSongIndex}
       nextSongIndex = {nextSongIndex}
       songs = {songs}/>
    </div>
  );
}

export default App;
