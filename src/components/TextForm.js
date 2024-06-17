import React , {useState} from 'react'
import PropTypes from 'prop-types' 
export default function TextForm(props) {


  const handleUpclick =() =>{
    console.log("Upper case was clicked");
    const newText = text.toUpperCase();
    setText(newText);
  };


  const handleOnChange =(event) =>{
    console.log("on change");
    setText(event.target.value);
  };
  const [text,setText] = useState('Enter your text here');
  //setText("Enter the text here plz :)");
  return (
    <>
    <div className = {`container text-${props.mode==='dark'?'light':'dark'}`} >
    <h1>
        {props.heading} 
    </h1>
  <div className="mb-3">
    <textarea className="form-control backgroundColor-${{backgroundColor : props.mode ==='dark'?'grey':'light'}`}" id="mybox" rows="8" value ={text} onChange={handleOnChange} style = {{backgroundColor : props.mode ==='dark'?'grey':'white',
                                                                                                            color : props.mode ==='light'?'black':'white'
    }}></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpclick}>
    Convert to UpperCase
  </button>
  </div>

  <div className={`container text-${props.mode==='dark'?'light':'dark'}`} style = {{color : props.mode ==='light'?'dark':'light'}}>
    <h2 className={`container text-${props.mode==='dark'?'light':'dark'}`}>Your text summary</h2>
    <p className={`container text-${props.mode==='dark'?'light':'dark'}`}> Your text has {text.split(" ").length} words and {text.length} characters</p>
    <h3 className={`container text-${props.mode==='dark'?'light':'dark'}`}>Preview</h3>
    <p>{text}</p>
  </div>
  </>
  );
}
