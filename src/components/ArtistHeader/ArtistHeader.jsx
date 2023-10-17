import React from "react";
import avatar from '../../img/igor.jpeg'

export default function Header() {
  return (
    <>
    <img
        className="avatar"
        src={avatar}
        style={{
          width: 120,
          height: 120
        }}
      />
      <p><i>The One and Only...</i></p>
      <header className="name">Igor Nikolayev</header>
      <p>A Soviet/Russian composer, singer and song-writer.</p>
    </>
  )
}
