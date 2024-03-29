// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
const Services = styled.section`
  padding: 30px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Features = () => {
  return (
    // <div>Features</div>
    <Services>
      <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Reading Area</h5>
          <p className="card-text">Discover actionable mental health and wellbeing advice.</p>
          <a href="/" className="btn btn-primary">Read Now</a>
        </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Explore Games</h5>
          <p className="card-text">Experience the joy of play to relax and rejuvenate! Dive into our games for a refreshing escape and a boost to your well-being.</p>
          <a href="/" className="btn btn-primary">Play Now</a>
        </div>
      </div>

      <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Chat Bot</h5>
          <p className="card-text">Engage in a lively chat with our friendly bot for a fun and helpful interaction!</p>
          <a href="/" className="btn btn-primary">Chat Now</a>
        </div>
      </div>
    </Services>
  )
}

export default Features