// const root = document.getElementById("root")

// const heading = document.createElement("h2")

// heading.innerHTML="Hello World..."

// root.appendChild(heading)
import React from 'react'
import ReactDOM from 'react-dom'

const parent = React.createElement("div",{id:"parent"},[
React.createElement("h1",{id:"child"},"Hello World..."),
React.createElement("h2",{id:"child"},"Hello World...")])


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
