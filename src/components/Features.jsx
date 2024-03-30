// import React from 'react'
import img1 from "../assets/img1.png";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/img3.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
const Services = styled.section`
padding: 30px;
padding-bottom: 150px;
display: flex;
justify-content: center;
align-items: center;

.heading{
  font-size: 42px;
  color: #ff6d6b;
  font-weight:700;
  margin-bottom: 48px;
  text-shadow: 1px 1px 1px rgb(43 57 74);
}
.wrapper{
  display: flex;
  justify-content: space-around ;
}
.card{
  display: inline-block;
  margin-left:10rem;
  margin-top: 3rem;
  width: 280px;
  height: 360px;
  padding: 2rem 1rem;
  background: #fff;
  position: relative;
  align-items: flex-end;
  box-shadow: 0px 7px 10px rgba(0,0,0,0.5);
  transition: 0.5s ease-in-out;
}
.card:hover{
  transform: translateY(20px);
  cursor: pointer;
}
.card:before{
  content: "";
  position: absolute;
  top: 0;
  left:0;
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,176,155,0.5), rgba(150,201,61,1));
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
   color: #fff;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s all;
}

.card:hover .card-body{
  opacity: 1;
  transform: translateY(0px);
}

.card .card-body h5{
         margin: 0;
}
.card .card-body p{
  letter-spacing: 1px;
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
    <>
    <h2 className="heading">FEATURES</h2>
    <Services id="featureSection">
      <div className="wrapper">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img1} className="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title">Reading Area</h5>
            <p className="card-text">Ready to unwind and let loose? Discover actionable mental health and wellbeing advice.</p>
            <a href="/readingarea" className="btn btn-primary">Read Now</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={img2} className="card-img-top"  />
          <div className="card-body">
            <h5 className="card-title">Explore Games</h5>
            <p className="card-text">Experience the joy of play to relax and rejuvenate! Dive into our games for a refreshing escape.</p>
            <a href="/forum" className="btn btn-primary">Play Now</a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src={img3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Chat Bot</h5>
            <p className="card-text">Engage in a lively chat with our friendly bot for a fun and helpful interaction!</p>
            <a href="https://emowellbeing.streamlit.app/" className="btn btn-primary">Chat Now</a>
          </div>
        </div>
        <div className="card">
          <img src={img3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Community Forum</h5>
            <p className="card-text">Engage in a lively chat with our friendly bot for a fun and helpful interaction!</p>
            <a href="/forum" className="btn btn-primary">Chat Now</a>
          </div>
        </div>
      </div>
    </Services>
    </>
  )
}

export default Features