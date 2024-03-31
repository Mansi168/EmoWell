import img1 from "../assets/img1.png";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/img-3.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";


// const Button = styled.button`
//   padding: 12px 24px;
//   font-size: 18px;
//   font-weight: 20px;
//   background: #2b394a;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background: #00dada;
//     color: black;
//     font-weight: 20px;
//   }
// `;
// const Services = styled.section`
//   padding: 30px;
//   padding-bottom: 150px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   .heading {
//     font-size: 42px;
//     color: #ff6d6b;
//     font-weight: 700;
//     margin-bottom: 48px;
//     text-shadow: 1px 1px 1px rgb(43 57 74);
//   }
//   .wrapper {
//     display: flex;
//     justify-content: space-around;
//   }
//   .card {
//     display: inline-block;
//     margin-left: 10rem;
//     margin-top: 3rem;
//     width: 280px;
//     height: 360px;
//     padding: 2rem 1rem;
//     background: #fff;
//     position: relative;
//     align-items: flex-end;
//     box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
//     transition: 0.5s ease-in-out;
//   }
//   .card:hover {
//     transform: translateY(20px);
//     cursor: pointer;
//   }
//   .card:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       to bottom,
//       rgba(0, 176, 155, 0.5),
//       rgba(150, 201, 61, 1)
//     );
//     z-index: 2;
//     transition: 0.5s all;
//     opacity: 0;
//   }
//   .card:hover:before {
//     opacity: 1;
//   }

//   .card-img-top {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     position: absolute;
//     top: 0;
//     left: 0;
//   }

//   .card-body {
//     position: relative;
//     z-index: 3;
//     color: #fff;
//     opacity: 0;
//     transform: translateY(30px);
//     transition: 0.5s all;
//   }

//   .card:hover .card-body {
//     opacity: 1;
//     transform: translateY(0px);
//   }

//   .card .card-body h5 {
//     margin: 0;
//   }
//   .card .card-body p {
//     letter-spacing: 1px;
//     font-size: 15px;
//     margin-top: 8px;
//     margin-bottom: 20px;
//   }
//   .btn btn-primary {
//     box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
//   }
// `;
// const Features = () => {
//   const { isAuthenticated, loginWithRedirect } = useAuth0();
//   return (
//     // <div>Features</div>
//     <>
//       <h2 className="heading">FEATURES</h2>
//       <Services id="featureSection">
//         <div className="wrapper">
//           <div className="card" style={{ width: "18rem" }}>
//             <img src={img1} className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Reading Area</h5>
//               <p className="card-text">
//                 Ready to unwind and let loose? Discover actionable mental health
//                 and wellbeing advice.
//               </p>
//               <Link to="/readingarea" target="_blank">
//                 <Button>Read Now</Button>
//               </Link>
//             </div>
//           </div>

//           <div className="card" style={{ width: "18rem" }}>
//             <img src={img2} className="card-img-top" />
//             <div className="card-body">
//               <h5 className="card-title">Explore Games</h5>
//               <p className="card-text">
//                 Experience the joy of play to relax and rejuvenate! Dive into
//                 our games for a refreshing escape.
//               </p>
//               <Link to="/games" target="_blank">
//                 <Button>Play Now</Button>
//               </Link>
//             </div>
//           </div>

//           <div className="card" style={{ width: "18rem" }}>
//             <img src={img3} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Chat Bot</h5>
//               <p className="card-text">
//                 Engage in a lively chat with our friendly bot for a fun and
//                 helpful interaction!
//               </p>
//               <Link to="https://emowellbeing.streamlit.app/" target="_blank">
//                 <Button>Chat Now</Button>
//               </Link>
//               {/* <a href="https://emowellbeing.streamlit.app/" className="btn btn-primary">Chat Now</a> */}
//             </div>
//           </div>
//           <div className="card">
//             <img src={img3} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Community Forum</h5>
//               <p className="card-text">
//                 Engage in a lively chat with our friendly bot for a fun and
//                 helpful interaction!
//               </p>
//               {isAuthenticated ? (
//                 <Link to="./forum" target="_blank">
//                   <Button>Learn More</Button>
//                 </Link>
//               ) : (
//                 <Button onClick={() => loginWithRedirect()}>Learn More</Button>
//               )}
//             </div>
//           </div>
//         </div>
//       </Services>
//     </>
//   );
// };

// export default Features;

import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

// Styled components for section, h2, p, img, and anchor elements
const Section = styled.section`
  padding: 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: var(--title-color);
  text-align: center;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  max-width: 100%;
  width: calc(100% - 3rem);
  margin-left: var(--mb-3);
  margin-right: var(--mb-3);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const DecorationContainer = styled.div`
display: flex;
flex-wrap: wrap; /* Allow cards to wrap to the next row */
gap: 2rem; /* Add gap between cards */
justify-content: center; /* Center the cards horizontally */
`;

const DecorationData = styled.div`
text-align: center;
padding: 1rem 1rem 2rem;
background-color: var(--container-color);
box-shadow: 0 2px 6px rgba(65, 11, 16, 0.15);
border-radius: 1rem;
width: calc(25% - 1rem); /* Adjust width to occupy 25% of the container width */
max-width: 220px; /* Limit maximum width */
flex: 1 0 auto; /* Allow flex-grow and prevent shrinking */
box-sizing: border-box; /* Include padding and border in the width */
`;

const DecorationImg = styled.img`
  width: 180px;
`;

const DecorationTitle = styled.h3`
  font-size: 20px;

  margin-bottom: var(--mb-1);
  margin: 1rem;
`;

const Button = styled.div`
  display: inline-block;
  background-color: rgb(48, 175, 91);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: var(--font-semi-bold);
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: rgb(43, 57, 74);
    text-decoration: none;
  }
`;

const ButtonLink = styled.a`
  background: none;
  padding: 0;
  color: var(--first-color);

  &:hover {
    background-color: transparent;
    color: var(--first-color-alt);
  }
`;

// Replace the original JSX with styled components
const FeaturesSection = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Section>
      <Title> Our Features</Title>
      <Container>
        {/* Place your cards on the right side here */}
        <DecorationContainer>
          <DecorationData>
            <DecorationImg
              src={img1}
              alt=""
            />
            <DecorationTitle>Reading Area</DecorationTitle>
            <p>Ready to unwind and let loose? Discover actionable mental health
                 and wellbeing advice.</p>
            <Button>
              <ButtonLink href="./readingArea" target="_blank">Read Now</ButtonLink>
            </Button>
          </DecorationData>
          {/* Repeat the same pattern for other elements */}
          <DecorationData>
            <DecorationImg
              src={img2} 
              alt=""
            />
            <DecorationTitle>Explore Games</DecorationTitle>
            <p>Experience the joy of play to relax and rejuvenate! Dive into
                 our games for a refreshing escape.</p>
            <Button>
              <ButtonLink href="/games" target="_blank">Play Now</ButtonLink>
            </Button>
          </DecorationData>

          <DecorationData>
            <DecorationImg
              src={img3}
              alt=""
            />
            <DecorationTitle>Chat Bot</DecorationTitle>
            <p>Engage in a lively chat with our friendly bot for a fun and
                 helpful interaction!</p>
            <Button>
              <ButtonLink href="https://emowellbeing.streamlit.app/" target="_blank">Chat Now</ButtonLink>
            </Button>
          </DecorationData>

          <DecorationData>
            <DecorationImg
              src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1707888470/CerviCare/Homepage/3_sbiawo.png"
              alt=""
            />
            <DecorationTitle>Community Forum</DecorationTitle>
            <p> Engage in a lively chat with our friendly bot for a fun and
                 helpful interaction!</p>
                 {isAuthenticated ? (
                <Link to="./forum">
                  <Button>Learn More</Button>
                </Link>
              ) : (
                <Button onClick={() => loginWithRedirect()}>Learn More</Button>
              )}
          </DecorationData>

        </DecorationContainer>
      </Container>
    </Section>
  );
};

export default FeaturesSection;
