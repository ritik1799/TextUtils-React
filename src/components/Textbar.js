import React, {useState} from 'react'

export default function Textbar(props) {
    //func to convert tp upper case
const handleUpClick = ()=> {
   // console.log("UpperCase was clicked" +text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success");
} 
//funtion to convert to lower case
const handleLowClick = ()=> {
    // console.log("UpperCase was clicked" +text);
     let newText=text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to LowerCase","success");
 }
 //func to allow edit of text
const handleOnChange=(event)=>{
   // console.log("On change");
    setText(event.target.value)
}
// function to speak
const speak = () => {
 let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  //function too reverse
  const handleReverse = (event) => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Reversed","success");
  };


const[text, setText]=useState(" ");

  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'?'grey':'white'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-10" onClick={handleUpClick}>Convert To UpperCase</button>
<button type="button" className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lower case</button>
<button type="button" className="btn btn-info mx-2" onClick={speak}>Speak</button>
<button type="button" className="btn btn-secondary mx-2" onClick={handleReverse}>Reverse</button>

    </div>
    <div className="container -my3" style={{color:props.mode === 'dark'?'white':'black'}}>
<h2> Your Text Summary</h2>
<p> {text.split(" ").length} words and {text.length} characters</p>
<p> It requires {0.008 * text.split(" ").length} min to read the above paragraph.</p>
<h2>Preview</h2>
<p>{text}</p>
    </div>

    </>
  )
}
