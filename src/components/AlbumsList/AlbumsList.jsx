import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import firstAlbum from '../../img/1.jpg'
import secondAlbum from '../../img/2.jpg'
import thirdAlbum from '../../img/3.jpg'
import LikeButton from "../LikeButton/LikeButton";
import AlbumItem from "../AlbumItem/AlbumItem";
import { useNavigate } from "react-router-dom";
export default function Albums() {
  const navigate = useNavigate();

  const albums = [
    {name: 'Fantasy', cover: firstAlbum, year: '1989'},
    {name: 'The Dolphin and the Mermaid', cover: secondAlbum, year: '1994'},
    {name: "Let's Toast to Love", cover: thirdAlbum, year: '1997'}
  ]

  return (
    <div className="mt-5 text-center">
    <button className="btn btn-info mb-4" onClick={() => navigate('/')}>← Back to main</button>

    <h2 className="mb-4">Albums list</h2>
    <Carousel indicators={false} className="carouselCentered">
      {albums.map((album, i) => (
      <Carousel.Item>
        <AlbumItem album={album} />
        <LikeButton/>
      </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}
