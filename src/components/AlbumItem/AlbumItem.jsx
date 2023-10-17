import React, {useState} from "react";

export default function AlbumItem({album}) {
  return (
    <>
    <img src={album.cover} 
        text={album.name} 
        style={{
          width: 250,
          height: 250
        }} 
        />
        <p>{album.name} ({album.year})</p>
        </>
  )
  
}
