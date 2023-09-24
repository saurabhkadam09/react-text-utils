import React, {useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('')
    let onChangeFunc = (event) => {
        setText(event.target.value)
    };

    let handleUpperCase = (event) => {
        setText(text.toUpperCase())
        props.showToastMessage("Text converted to Uppercase!")
    };

    let handleLowerCase = (event) => {
        setText(text.toLowerCase())
        props.showToastMessage("Text converted to Lowercase!")
    };

    let handleClear = (event) => {
      setText("")
      props.showToastMessage("Text cleared!")
    };

    let handleCapitalizeFirstLetter = (event) => {
      const arr = text.split(" ")
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
      }
      setText(arr.join(" "));
      props.showToastMessage("Text capitalized!")
    };

  return (
    <div className='container'>
        <div className="mb-3 my-3">
            <h2 className={`text-${props.mode === "dark"?"light":"black"}`}>Enter Text Below</h2>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onChangeFunc} rows="6" style={{backgroundColor: props.mode === "dark"?"#d8c4df":"white"}}></textarea>
            <button type="button" className={`btn btn-${props.mode === "dark"?"dark":"primary"} my-2 mx-1`} onClick={handleUpperCase}>UpperCase</button>
            <button type="button" className={`btn btn-${props.mode === "dark"?"dark":"primary"} my-2 mx-1`} onClick={handleLowerCase}>LowerCase</button>
            <button type="button" className={`btn btn-${props.mode === "dark"?"dark":"primary"} my-2 mx-1`} onClick={handleClear}>Clear</button>
            <button type="button" className={`btn btn-${props.mode === "dark"?"dark":"primary"} my-2 mx-1`} onClick={handleCapitalizeFirstLetter}>Capitalize First Letter</button>
        </div>
        <div className="hstack gap-3">
          <div className={`p-2  text-${props.mode === "dark"?"light":"black"}`}>Word Count</div>
          <div className={`p-2  text-${props.mode === "dark"?"light":"black"}`}>{text.split(" ").filter((element) => element.length !== 0).length}</div>
          <div className={`p-2  text-${props.mode === "dark"?"light":"black"}`}>Letter Count</div>
          <div className={`p-2  text-${props.mode === "dark"?"light":"black"}`}>{text.length}</div>
        </div>
        <div className={`h1 my-2 text-${props.mode === "dark"?"light":"black"}`}>Preview</div>
        <p className={`text-${props.mode === "dark"?"light":"black"}`}>{text}</p>
    </div>
  )
}
