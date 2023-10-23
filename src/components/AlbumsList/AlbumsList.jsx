import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import LikeButton from "../LikeButton/LikeButton";
import AlbumItem from "../AlbumItem/AlbumItem";
import { useNavigate } from "react-router-dom";


export default function Albums({albums, handleEditAlbum, handleDeleteAlbum, handleAddAlbum}) {
  const navigate = useNavigate();

  return (
    <div className="mt-5 text-center">
      <button className="btn btn-info mb-4" onClick={() => navigate('/')}>← Back to main</button>

      <h2 className="mb-4">Albums list</h2>
      <Carousel indicators={false} className="carouselCentered">
        {albums.map((album, index) => (
          <Carousel.Item key={index}>
            <AlbumItem album={album} handleEditAlbum={handleEditAlbum} handleDeleteAlbum={handleDeleteAlbum} />
            <LikeButton />
          </Carousel.Item>
        ))}
      </Carousel>
      <button className="btn btn-primary mt-3" onClick={handleAddAlbum}>Add New Album</button>
    </div>
  );
}
