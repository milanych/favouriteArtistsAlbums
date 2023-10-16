import React, {useState} from "react";
import './App.css';

export default function Subscribe() {
  const [inputText, setInputText] = useState(''); 
  const [submittedText, setSubmittedText] = useState('')
  const handleInput = (e) => setInputText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(inputText)
    window.location.reload()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} placeholder="Fan Club Subscription"/>
        <button type="submit">Join</button>
      </form>
    </>
  )
}
