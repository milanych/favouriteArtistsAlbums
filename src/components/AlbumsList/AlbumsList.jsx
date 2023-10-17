import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import firstAlbum from '../../img/1.jpg'
import secondAlbum from '../../img/2.jpg'
import thirdAlbum from '../../img/3.jpg'
import LikeButton from "../LikeButton/LikeButton";
import AlbumItem from "../AlbumItem/AlbumItem";

export default function Albums() {

  const albums = [
    {name: 'Fantasy', cover: firstAlbum, year: '1989'},
    {name: 'The Dolphin and the Mermaid', cover: secondAlbum, year: '1994'},
    {name: "Let's Toast to Love", cover: thirdAlbum, year: '1997'}
  ]

  return (
    <>
    <h2>Albums list</h2>
    <Carousel indicators={false} className="carouselCentered">
      {albums.map((album) => (
      <Carousel.Item>
        <AlbumItem album={album} />
        <LikeButton/>
      </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}
