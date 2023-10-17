import React, {useState} from 'react';

export default function likeButton() {
  const [like, setLike] = useState(); 

    const likeAlbum = (e) => {
    const heart = e.target.classList;
    if (heart.contains('liked')) {
      setLike(heart.remove('liked'))
    } else {
      setLike(heart.add('liked'))
    }
    }
  return (
    <>
    <span className="likeButton" onClick={likeAlbum}>&#9829;</span>
    </>
  )
}
