import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import React from "react";
import Nav from './Nav.jsx';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { ArtistHeader, AlbumsSubscribe, AlbumsList } from "./components/";
import { addNewAlbum, editAlbum, deleteAlbum } from "./action-creators";

export default function App() {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.albums.albums);

  //ADD
  const handleAddAlbum = () => {
    const newAlbum = {
      name: 'New Album',
      cover: 'newAlbumCover.jpg',
      year: '2023',
    };
    dispatch(addNewAlbum(newAlbum));
  };

  //EDIT
  const handleEditAlbum = (name, updatedData) => {
     dispatch(editAlbum(name, updatedData))
  };

  //DELETE
  const handleDeleteAlbum = (albumToDelete) => {
    dispatch(deleteAlbum(albumToDelete))
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<ArtistHeader/>}/>
          <Route path="subscribe" element={<AlbumsSubscribe/>}/>
          <Route path="albums" element={<AlbumsList albums={albums} handleAddAlbum={handleAddAlbum} handleEditAlbum={handleEditAlbum} handleDeleteAlbum={handleDeleteAlbum}/>}/>
          <Route path="*" element={<h1 className='mt-4'>Page Not Found</h1>} />
      </Route>
    </Routes>
    </>
  )
}
