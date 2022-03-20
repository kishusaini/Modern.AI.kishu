import React from 'react'
import possibilityImage from "../../assets/possibility.png"
import './possibility.css'
const Possibility = () => {
  return (
    <section>
    <div id="stars-container">
			<div id='stars'></div>
			<div id='stars2'></div>
			<div id='stars3'></div>

    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__clr">The possibilities are <br /> beyond your imagination</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
  </div>
  </section>
  )
}

export default Possibility