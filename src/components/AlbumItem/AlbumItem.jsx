import React, { useState } from "react";

export default function AlbumItem({ album, handleEditAlbum, handleDeleteAlbum }) {
  const [formData, setFormData] = useState({
    name: album.name,
    cover: album.cover,
    year: album.year,
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditAlbum(album.name, formData);
  };
  const handleDelete = () => {
    handleDeleteAlbum(album);
  };
  
  return (
    <>
      <img
        className="cover"
        src={album.cover}
        alt={album.name}
      />
      <p>{album.name} ({album.year})</p>
      <form className='input-group d-flex flex-column' onSubmit={handleSubmit}>
        <input
          className="form-control w-100" type="text" placeholder="Name" value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          className="form-control w-100" type="text" placeholder="Image" value={formData.cover}
          onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
        />
        <input
          className="form-control w-100" type="number" placeholder="Year" value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
        />
        <button type='submit'>Edit Album</button>
        <button type='button' onClick={handleDelete}>Delete Album</button>
      </form>
    </>
  );
}
