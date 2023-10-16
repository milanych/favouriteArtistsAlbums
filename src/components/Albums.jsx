import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import firstAlbum from '../img/1.jpg'
import secondAlbum from '../img/2.jpg'
import thirdAlbum from '../img/3.jpg'
import '../css/App.css';

export default function Albums() {
  const [like, setLike] = useState(); 
  const likeAlbum = (e) => {
    const heart = e.target.classList;
    if (heart.contains('liked')) {
      setLike(heart.remove('liked'))
    } else {
      setLike(heart.add('liked'))
    }
    }
  const albums = [
    {name: 'Fantasy', cover: firstAlbum, year: '1989'},
    {name: 'The Dolphin and the Mermaid', cover: secondAlbum, year: '1994'},
    {name: "Let's Toast to Love", cover: thirdAlbum, year: '1997'}
  ]
  return (
    <Carousel indicators={false} className="carouselCentered">
      {albums.map((album) => (
      <Carousel.Item>
        <img src={album.cover} 
        text={album.name} 
        style={{
          width: 250,
          height: 250
        }} 
        />
        <p>{album.name} ({album.year})</p>
        <span className="likeButton" onClick={likeAlbum}>&#9829;</span>
      </Carousel.Item>
      ))}
    </Carousel>
  );
}
