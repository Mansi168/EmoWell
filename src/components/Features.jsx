// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
const Services = styled.section`
padding: 30px;
padding-bottom: 150px;
diplay: flex;
justify-content: center;
align-items: center;

.heading{
  font-size: 90px;
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper{
  disply: flex;
  wisth: 70% ;
  justify-content: space-around ;
}
.card{
  display: inline-block;
  // height: 20rem;
   margin-left:10rem;
  margin-top: 3rem;
  width: 280px;
  height: 360px;
  padding: 2rem 1rem;
  background: #fff;
  position: relative;
  slign-items: flex-end;
  box-shadow: 0px 7px 10px rgba(0,0,0,0.5);
  transition; 0.5s ease-in-out;
}
.card:hover {
  transform: translateY(20px);
  cursor: pointer;
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left:0;
  display: block:
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom , rgba(0,176,155,0.5), rgba(150,201,61,1));
  z-index: 2;
  transition: 0.5s all;
  opacity: 0;
}
.card:hover:before{
  opacity: 1;
}

.card-img-top{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

}

.card-body{
  position: relative;
  z-index: 3;
  // color: #fff;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s all;
}

.card:hover .card-body{
  opacity: 1;
  transform: translateY(0px);
}

.card .card-body h5{
         margin; 0;
}
.card .card-body p{
  Letter-spacing: 1px;
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 20px;
}
.btn btn-primary{
  box-shadow: 0px 7px 10px rgba(0,0,0,0.5);
}
`;
const Features = () => {
  return (
    // <div>Features</div>
    <Services>
      <h2 className="heading">FEATURES</h2>
      <div className="wrapper">
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title">Reading Area</h5>
            <p className="card-text">Ready to unwind and let loose? Discover actionable mental health and wellbeing advice.</p>
            <a href="/" className="btn btn-primary">Read Now</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title">Explore Games</h5>
            <p className="card-text">Experience the joy of play to relax and rejuvenate! Dive into our games for a refreshing escape.</p>
            <a href="/" className="btn btn-primary">Play Now</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Chat Bot</h5>
            <p className="card-text">Engage in a lively chat with our friendly bot for a fun and helpful interaction!</p>
            <a href="/" className="btn btn-primary">Chat Now</a>
          </div>
        </div>
      </div>
    </Services>
  )
}

export default Features