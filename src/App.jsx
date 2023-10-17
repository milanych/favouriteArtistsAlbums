import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import {ArtistHeader, AlbumsSubscribe, AlbumsList} from "./components/";
import './css/App.css';

export default function App() {
  return (
    <>
      <ArtistHeader/>
      <AlbumsSubscribe/>
      <AlbumsList/>
    </>
  )
}
