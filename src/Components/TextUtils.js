import React, { useState } from 'react'
// let textarea = document.getElementById("floatingTextarea2")

export default function TextUtils(props) {
     const [text, setText] = useState("")
     const [count, setCount] = useState(0)
     let toUpperCase = () => {
          let newText = text.toUpperCase()
          setText(newText)
          // console.log("upperCase")
     }
     let toLowerCase = () => {
          let newText = text.toLowerCase()
          setText(newText)
          console.log(text)
     }
     let removeSpace = () => {
          let newText = text.replace(/\s+/g, " ")
          setText(newText)
          console.log(text)
     }
     let removeLines = () => {
          let newText = text.replace(/\n+/g, "\n")
          setText(newText)
          console.log(text)
     }
     let toBold = () => {
          // let newText = {<b> text</b>}
          // setText(newText)
          console.log(text)
     }
     let toCopy = () => {
          // let newText = {<b> text</b>}
          // setText(newText)
          // console.log(text)
          navigator.clipboard.writeText(text)
          // let newText = "copied!!!"
          // setText(newText)
     }

     let handleOnchange = (event) => {
          setText(event.target.value)
          if (text !== "") {
               setText(event.target.value)
               setCount(text.trim().split(" ").length)
          }
          else if (text == "") {
               setCount(0)
               console.log(text)
          }
          // setCount(text.trim().split(" ").length)


     }

     return (
          <>

               <h2>{props.heading}</h2>
               <div className="form-floating my-3">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "300px", width: "700px" }} value={text} onChange={handleOnchange}></textarea>
                    {/* <label htmlFor="floatingTextarea2">{text}</label> */}
               </div>
               <div className=" my-2">
                    <button type="button" className="btn btn-primary" onClick={toUpperCase}>UpperCase</button>
                    <button type="button" className="btn btn-secondary mx-1" onClick={toLowerCase}>LowerCase</button>
                    <button type="button" className="btn btn-success mx-1" onClick={removeSpace}>Remove extra spaces</button>
                    <button type="button" className="btn btn-danger mx-1" onClick={removeLines}>Remove extra lines</button>
                    <button type="button" className="btn btn-warning mx-1" onClick={toBold}><b>Bold</b></button>
                    <button type="button" className="btn btn-info mx-1" onClick={toUpperCase}><i>Italic</i></button>
                    {/* <button type="button" className="btn btn-light mx-1" onClick={toUpperCase}>Light</button> */}
                    <button type="button" className="btn btn-dark mx-1" onClick={toCopy}>Copy</button>
               </div>


               {/* <button type="button" className="btn btn-link">Link</button> */}
               <div className="info">
                    <p><b>{count}</b> words & <b>{text.length}</b> Charecters</p>
               </div>
          </>
     )
}
