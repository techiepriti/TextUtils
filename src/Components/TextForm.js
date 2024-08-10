import React, { useState } from 'react'


export default function TextForm(props) {

    const [Text, setText] = useState("");
    const handleUpClick = ()=>{
        let newText= Text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        let newText= Text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className="container my-3">
        <h2>{props.heading}</h2>
<    div className="mb-3">
     <textarea class="form-control" id="myBox" value={Text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div classname="container my-3">
    <h3>Your Text Summary</h3>
    <p>{Text.split(" ").length} words and {Text.length} Characters</p>
    <p>{0.008 * Text.split(" ").length} Minutes read</p>
    <h4>Preview</h4>
    <p>{Text}</p>
    </div>
    </>
  )
}

