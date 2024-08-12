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
    const handleClearClick = ()=>{
      let newText= "";
      setText(newText);
  }
  const handleCopyClick = ()=>{
    try {
    window.navigator.clipboard.writeText(Text);
    window.alert("text coiped!");
    }
    catch (err) {
      console.error(
          "Unable to copy to clipboard.",
          err
      );
      alert("Copy to clipboard failed.");
  }
    
}
const handleExtraSpaces = ()=>{
  let newText = Text.split(/[ ]+/);
  setText(newText.join(" "));
}
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className="container my-3">
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>{props.heading}</h2>
    <    div className="mb-3">
        <textarea class="form-control" id="myBox" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} rows="8"></textarea>
        </div>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to clipboard</button>
        <button disabled={Text.length === 0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

      <div classname="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h3>Your text summary</h3>
        <p>{Text.split(" ").length} words and {Text.length} Characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes read</p>
        <h4>Preview</h4>
        <p>{Text}</p>
      </div>

    </div>
    </div>
    </>
  )
}

