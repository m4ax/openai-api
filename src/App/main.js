import React from 'react';
import { useState, useEffect } from 'react';
import callAPI from '../API/main.js';
import Paragraph from '../Paragraph/main.js';
import Button from '../Button/main.js';
/*Plan

Store the input data in a state

When button clicked run the function
Import the function into this component
change the function so that the data is the value of what is inside the text box, use props to pass it down

*/

function App() {

const [state, setState] = useState("");
const [reply, setReply] = useState("");

function handleChange(e) {
    setState(e.target.value)
    console.log(state)
}

const handleClick = async () => {
    const response = await callAPI(state)
    setReply(response)

}

useEffect(() => {
  console.log(`handle ${reply}`);
}, [reply]);


    return <>
    <textarea onChange={handleChange} value={state}></textarea>
    <Button onClick={handleClick}>Send Request </Button>
    <Paragraph props={reply}/>
    </>
}


export default App