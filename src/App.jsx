import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import Nav from './Nav.jsx';
import {ArtistHeader, AlbumsSubscribe, AlbumsList} from "./components/";
import './css/App.css';
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<ArtistHeader/>}/>
          <Route path="subscribe" element={<AlbumsSubscribe/>}/>
          <Route path="albums" element={<AlbumsList/>}/>
       
        <Route path="*" element={<h1 className='mt-4'>Page Not Found</h1>} />
      </Route>
    </Routes>
    </>
  )
}
