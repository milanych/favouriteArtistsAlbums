import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import Header from "./Header";
import Albums from "./Albums";
import './App.css';
import Subscribe from "./Subscribe";

export default function App() {
  return (
    <>
      <Header/>
      <Subscribe/>
      <Albums/>
    </>
  )
}
