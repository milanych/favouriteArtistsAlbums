import React, { useState, useEffect } from "react";

export default function Header() {
  const colors = ["#28bd8b", "#771796", "#2cc751", "#d32776", "#f66b97"];
  const [artist, artistInfo] = useState('')
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setValue((i) => i === 4 ? 0 : i + 1), 250);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getArtistInfo()
  }, '')
  
  const getArtistInfo = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/artist/2358341';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4eb45230d9msh9d3799578c173edp1801dbjsn23692e84a8f9',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      artistInfo(result)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
    <img
        className="avatar"
        src={artist.picture}
        style={{
          width: 120,
          height: 120
        }}
      />
      <p><i>The One and Only...</i></p>
      <header className="name" style={{color: colors[value]}}>{artist.name}</header>
      <p>A Soviet/Russian composer, singer and song-writer.</p>
    </>
  )
}
