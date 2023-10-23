import React, {useState} from "react";


export default function Subscribe() {
  const [inputText, setInputText] = useState(''); 
  const handleInput = (e) => setInputText(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(inputText)
    window.location.reload()
  }
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} placeholder="Fan Club Subscription"/>
        <button type="submit">Join</button>
      </form>
    </div>
  )
}
