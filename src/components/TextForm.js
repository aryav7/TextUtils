import React, { useState } from "react";
// import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState(``);

  const handleUpClick = () => {
    // console.log("Uppercase was clicked: "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to Uppercase","success ")
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked: "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase","success ")
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked: "+ text);
    let newText = " ";
    setText(newText);
    props.showAlert(" Text Cleared","success ")

  };

  const handleOnChange = (event) => {
    // console.log("Handle on change");
    setText(event.target.value);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }; 

  const replacecasefunc = () => {
    let existing_text = prompt("Find word to replace : ");
    let replaced_text = prompt("Enter New word ");
    setText(text.replaceAll(existing_text, replaced_text));
    props.showAlert(" Replaced","success ")

  };
  
const handleCopy = ()=>{
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert(" Copied to Clipboard","success ")

};

const removeSp = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert(" Extra Spaces removed","success ")

}

  // const calcTypeOfLetters = () => {
  //   const res = { Vowels: 0, Consonants : 0 }
  //   const VOWELS = ["a","e","i","o","u"]
    
  //   for(let char of text){
  //     if(VOWELS.includes(char.toLowerCase())){
  //       res["Vowels"] = res["Vowels"] + 1
  //     }
  //   }


  // }
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
      <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{backgroundColor: props.mode ==='dark'?"rgb(22 28 82)":"white",color: props.mode ==='dark'?'white':'black'}}
          value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={speak}>
          Click to Speak
        </button>
        <button className="btn btn-primary mx-1" onClick={replacecasefunc}>
          Replace word
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={removeSp}>
          Remove Extra Spaces
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={calcTypeOfLetters}>
          No.of Vowels
        </button> */}
      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
