
import React from "react"
import ReactDOM from "react-dom"


const parent = React.createElement("div",{id:"parent1"},
[React.createElement("h1",{},"Hello React"),
React.createElement("h2",{},"Hello React")])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
