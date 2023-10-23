import React from 'react';

export default function likeButton() {
  const likeAlbum = (e) => e.target.classList.contains('liked') ? e.target.classList.remove('liked') : e.target.classList.add('liked')
  return (
    <>
    <span className="likeButton" onClick={likeAlbum}>&#9829;</span>
    </>
  )
}
