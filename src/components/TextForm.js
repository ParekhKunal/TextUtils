import React, { useState } from "react";

export default function TextForm(props) {
  const handleclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "danger");
  };
  const handleCopy = () => {
    var copytext = document.getElementById("txtarea");
    copytext.select();
    copytext.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copytext.value);
    props.showAlert("Copied successfully", "success");
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="txtarea"
          value={text}
          onChange={handleOnChange}
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "white" : "white",
            color: props.mode === "dark" ? "black" : "black",
          }}
        ></textarea>
      </div>
      <button className="btn btn-info mx-2 mb-2" onClick={handleclick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-info mx-2 mb-2" onClick={handleLowclick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-info mx-2 mb-2" onClick={handleCopy}>
        Copy
      </button>
      <button className="btn btn-danger mx-2 mb-2" onClick={handleClearClick}>
        Clear
      </button>
      <div className="container my-3 ">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </div>
  );
}
