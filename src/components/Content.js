import React from 'react';
import '../styles/content.css';
import step1 from '../image/images.jpg';
import step2 from "../image/backimage.jpg";
import step3 from "../image/image1.jfif"
import { FaCommentDots } from 'react-icons/fa'

function Content() {
  return (
    <>
      <div className="contentPage">
        <h1>How it Works?</h1>
        <div className="steps">
          <div className="step1">
            <div className="card" style={{ width: "300px" }}>
              <img className="card-img-top" src={step1} alt="" />
              <div className="card-body">
                <h4 className="card-title">BUY</h4>
                <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, aliquid?  </p>
              </div>
            </div>
          </div>
          <div className="step2">
            <div className="card" style={{ width: "300px" }}>
              <img className="card-img-top" src={step2} alt="" />
              <div className="card-body">
                <h4 className="card-title">SELL</h4>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, velit.</p>
              </div>
            </div>
          </div>
          <div className="step3">
            <div className="card" style={{ width: "300px" }}>
              <img className="card-img-top" src={step3} alt="" />
              <div className="card-body">
                <h4 className="card-title">TRADE</h4>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="socialProof">
        <p>Trusted by more than 1 Million users!!</p>
          <>
            <div className="comments">
              
                <div className="comment">
                  <div className="header">
                    <p className="name">Sameer Bansal</p>
                    <div><FaCommentDots size={30} color="green" /></div>
                  </div>
                  <div> Hi Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aut, repellat
                    quis veritatis voluptatum cumque repudiandae perferendis doloribus quam quas?</div>
                </div>
              
              
                <div className="comment">
                  <div className="header">
                  <p className="name">Karishma Rathore</p>
                  <div><FaCommentDots size={30} color="green" /></div>
                  </div>
                <div >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro natus rerum autem dolor necessitatibus consequuntur
                  voluptates voluptatum excepturi omnis voluptate eligendi totam, inventore dicta a vitae!
                </div>
                </div>
                
                <div className="comment">
                  <div className="header">
                  <p className="name">Taani Kapoor</p>
                  <div><FaCommentDots size={30} color="green" /></div>
                  </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, asperiores. Quia obcaecati, praesentium saepe beatae odit
                  commodi quo minus voluptatibus adipisci tenetur vero ullam magnam.</div>
              </div>
              </div>
          </>
        </div>
    </>
  )
}

export default Content