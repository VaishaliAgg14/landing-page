import React , {useState} from 'react';
import image1 from '../image/undraw_wallet_aym5-removebg-preview.png';
import "../styles/MainPage.css"

function MainPage() {
  const [email ,  setEmail] = useState("")

  const onClickHandler = (e) => {
    e.preventDefault();
    if (!email.includes("@")){
      alert("enter a valid email")
    }
    setEmail("")
  }
  return (
    <div className="container">
    <div className="MainPage">
        <div className = "content">
            <h1>Start Investing Today</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ea laudantium molestias sit iste commodi impedit dolorum? Sapiente, exercitationem repellendus?</p>
        </div>
        <div className="image">
            <img src={image1} alt="" />
        </div>
    </div>
    <div className = "mainPage-form">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="johnsmith@example.com" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Enter you email here" aria-describedby="button-addon2" />
            <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={onClickHandler}>Get Started</button>
          </div>
        </div>
  
    </div>
  )
}
export default MainPage