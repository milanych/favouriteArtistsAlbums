import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import firstAlbum from './img/1.jpg'
import secondAlbum from './img/2.jpg'
import thirdAlbum from './img/3.jpg'
import './App.css';

export default function Albums() {
  const [like, setLike] = useState(''); 
  const likeAlbum = (e) => {
      setLike(e.target.style.color !== 'white' ? e.target.style.color = 'white' : e.target.style.color = 'red')
    }
  
  return (
    <Carousel indicators={false} className="carouselCentered">
      <Carousel.Item>
        <img src={firstAlbum} 
        text="Fantasy" 
        style={{
          width: 250,
          height: 250
        }} 
        />
        <p>Fantasy (1989)</p>
        <span className="likeButton" onClick={likeAlbum}>&#9829;</span>
      </Carousel.Item>
      <Carousel.Item>
        <img src={secondAlbum} 
        text="Second slide"
        style={{
          width: 250,
          height: 250
        }}  
        />
        <p>The Dolphin and the Mermaid (1994)</p>
        <span className="likeButton" onClick={likeAlbum}>&#9829;</span>
      </Carousel.Item>
      <Carousel.Item>
        <img src={thirdAlbum} 
        text="Third slide" 
        style={{
          width: 250,
          height: 250
        }} 
        />
        <p>Let's Toast to Love (1997)</p>
        <span className="likeButton" onClick={likeAlbum}>&#9829;</span>
      </Carousel.Item>
    </Carousel>
  );
}
