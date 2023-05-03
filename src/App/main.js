import React from 'react';
import { useState } from 'react';
import callAPI from '../API/main.js';
import Paragraph from '../Paragraph/main.js';
/*Plan

Store the input data in a state

When button clicked run the function
Import the function into this component
change the function so that the data is the value of what is inside the text box, use props to pass it down

*/

function App() {

const [state, setState] = useState("");

function handleChange(e) {
    setState(e.target.value)
    console.log(state)
}




    return <>
    <input onChange={handleChange} value={state}></input>
    <button onClick={() => {callAPI(state)}}>Send Request</button>
    <Paragraph />
    </>
}

export default App