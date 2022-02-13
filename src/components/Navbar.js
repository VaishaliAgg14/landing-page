import React from 'react'
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className= "navbar">
        <h1>Title</h1>
        <div className="sideLinks">
            <div className="getStarted">
            <button className="btn btn-outline-dark" type="button">Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar