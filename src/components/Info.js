import React from 'react';
import image from "../image/infoimage.png"
import "../styles/info.css"

function Info() {
  return (
    <div className="info">
        <div className="infoImage">
            <img src={image} alt=""></img>
        </div>
        <div className="infocontent">
            <p className="infoTitle"> Why Trade in Crypto?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Suscipit obcaecati distinctio est iusto odit magni nam adipisci consequatur doloribus tempore?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, in.</p>
            <button className="btn btn-primary">Learn More </button>
        </div>
    </div>
  )
}

export default Info