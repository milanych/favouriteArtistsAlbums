import { NavLink, Outlet } from "react-router-dom";
import React, {useState} from "react";


export default function Nav() {
  let activeStyle = {
    textDecoration: 'underline',
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg w-100 bg-light">
      <div className="container">
      <ul className="navbar-nav d-flex justify-content-between flex-row w-100">
        <li className="nav-item"><NavLink to="/" style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink></li>
        <li className="nav-item"><NavLink to="/albums" style={({isActive}) => (isActive ? activeStyle : undefined)}>Albums</NavLink></li>
        <li className="nav-item"><NavLink to="/subscribe" style={({isActive}) => (isActive ? activeStyle : undefined)}>Subscribe</NavLink></li>
      </ul>
    </div>
    </nav>
    <Outlet/>
    </>
  )
}
