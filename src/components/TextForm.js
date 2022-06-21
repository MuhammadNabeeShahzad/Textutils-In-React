import React, { useState } from "react";

export default function TextForm(props) {
  const Onclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const Onclick2 = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
  };
  const handleOneChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
    <div className="container my-3 ">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOneChange}
          id="textbox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-secondary" onClick={Onclick}>
        Convert to Uppercase
      </button>
    
      <button className="btn btn-secondary mx-3" onClick={Onclick2}>
        Convert to Lowercase
      </button>
    </div>
    <div className="container">
    <h1>YOUR TEXT SUMMARY</h1>
    <p> Total words={text?text.split(' ').length:0} AND TOTAL CHARACTERS ={text.length}</p>
    </div>
</>

  );
}
