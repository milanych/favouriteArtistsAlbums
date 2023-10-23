import React, { useState, useEffect } from "react";

export default function Header() {
  const colors = ["#28bd8b", "#771796", "#2cc751", "#d32776", "#f66b97"];
  const [artist, artistInfo] = useState('')
  const [value, setValue] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setValue((i) => i === 4 ? 0 : i + 1), 750);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
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
      const info = await response.json();
      artistInfo(info)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  getArtistInfo()
  }, [])

  return (
    <>
      {isLoading ? (
        <p style={{padding:'3rem'}}>Loading...</p>
      ) : (
        <>
          <img
            className="avatar"
            src={artist.picture}
          />
          <p><i>The One and Only...</i></p>
          <header className="name" style={{color: colors[value]}}>{artist.name}</header>
          <p>A Soviet/Russian composer, singer, and song-writer.</p>
        </>
      )}
    </>
  )
}
