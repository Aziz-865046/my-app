import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClClick = () => {
    let newText = "";
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleinverseclick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  };

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ");
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>
          Text to Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleinverseclick}>
          Reverce
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalize}>
          Convert to Capitalize Each Word
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read text.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
// Function to Capitalise the text:
//  const handleCapitalise = () => {
//     const lowerCase = text.toLowerCase();
//     const handle = lowerCase[0].toUpperCase() + lowerCase.slice(1);
//     setText(handle);
//   };
//////////////////////////////////////////////////////////////////////////////////////
// const [fWord, findWord] = useState("");
// const [rWord, replaceWord] = useState("");
// Function :
// const handlefindChange = (event) => {
//     findWord(event.target.value);
//   };
//   const handleReplaceChange = (event) => {
//   console.log(replaceWord(event.target.value)) ;
//   };
//   const handleReplaceClick = () => {
//     let newText = text.replaceAll(fWord,rWord);
//     setText(newText);
//   };
// TextArea  Of Find Words:
//           value={fWord}
//           onChange = {handleFindChange}
// TextArea Of Replace Words :
//           value={rWord}
//           onChange = {handleReplaceChange}
// add event on button  :
//           onclick = {handleReplaceClick}
