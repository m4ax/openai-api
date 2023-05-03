import React from "react"
import "./index.css"

function Button(props) {

    return <button onClick={props.onClick}>Send Request</button>
}

export default Button