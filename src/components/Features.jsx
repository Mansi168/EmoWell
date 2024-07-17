import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import img1 from "../assets/img1.png";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/img-3.png";
import img4 from "../assets/MH.avif";

const Section = styled.div`
  padding: 4rem 0 2rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 760px) {
    margin-top:40px;
  }

  @media screen and (max-width: 1024px) {
    margin-top:40px;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: var(--title-color);
  text-align: center;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  bacground: yellow;
`;

const DecorationContainer = styled.div`
  display: inline-grid;
  gap:1rem;
  grid-template-columns: auto auto auto auto auto auto;
  padding: 10px;

  @media only screen and (max-width: 650px) {
    grid-template-columns: auto;
  }

  @media screen and (min-width: 651px) and (max-width:800px) {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 801px) and (max-width:1025px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (min-width: 1025px) and (max-width:1300px) {
    grid-template-columns: auto auto auto auto;
  }


`;

const DecorationData = styled.div`
  display:flex;
  flex-direction: column;
  gap: 10px;
  width:250px;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 2px 6px rgba(65, 11, 16, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  box-sizing: border-box;
`;

const DecorationImg = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const DecorationTitle = styled.h3`
  font-size: 1.5rem;
  height: 60px;
  margin: 1rem 0;
  color: var(--title-color);
`;

const Button = styled.div`
  display: inline-block;
  background-color: rgba(48, 175, 91);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: var(--font-semi-bold);
  transition: 0.3s;
  cursor: pointer;
  text-decoration: none;
  width: 150px;
  &:hover {
    background-color: rgba(43, 57, 74, 0.85);
    text-decoration: none;
  }
`;
const DecorationDescription = styled.div`
  height: 130px;
`;

const FeaturesSection = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Section id="featureSection" data-aos="fade down">
      <Title data-aos="fade-up">Our Features</Title>
      <Container>
        <DecorationContainer>
          <DecorationData data-aos="fade-up">
            <DecorationImg src={img1} alt="Reading Area" />
            <DecorationTitle>Reading Area</DecorationTitle>
            <DecorationDescription>
              <p>
                Ready to unwind and let loose? Discover actionable mental health
                and wellbeing advice.
              </p>
            </DecorationDescription>
            <Link to="/readingarea">
              <Button>Read Now</Button>
            </Link>
          </DecorationData>

          <DecorationData data-aos="fade-down">
            <DecorationImg src={img2} alt="Explore Games" />
            <DecorationTitle>Explore Games</DecorationTitle>
            <DecorationDescription>
              <p>
                Experience the joy of play to relax and rejuvenate! Dive into
                our games for a refreshing escape.
              </p>
            </DecorationDescription>
            <Link to="/games">
              <Button>Play Now</Button>
            </Link>
          </DecorationData>

          <DecorationData data-aos="fade-up">
            <DecorationImg src={img3} alt="Chat Bot" />
            <DecorationTitle>Chat Bot</DecorationTitle>
            <DecorationDescription>
              <p>
                Engage in a lively chat with our friendly bot for a fun and
                helpful interaction!
              </p>
            </DecorationDescription>
            <Link to="https://emowellbeing.streamlit.app/" target="_blank">
              <Button>Chat Now</Button>
            </Link>
          </DecorationData>

          <DecorationData data-aos="fade-down">
            <DecorationImg
              src="https://res.cloudinary.com/dx0dgujbj/image/upload/v1707888470/CerviCare/Homepage/3_sbiawo.png"
              alt="Community Forum"
            />
            <DecorationTitle>Community Forum</DecorationTitle>
            <DecorationDescription>
              <p>
                Engage in a lively chat with our friendly bot for a fun and
                helpful interaction!
              </p>
            </DecorationDescription>
            {isAuthenticated ? (
              <Link to="/forum">
                <Button>Learn More</Button>
              </Link>
            ) : (
              <Link>
                <Button onClick={() => loginWithRedirect()}>Learn More</Button>
              </Link>
            )}
          </DecorationData>
          <DecorationData data-aos="fade-up">
            <DecorationImg src={img4} alt="MH" />
            <DecorationTitle>Mental Health Tests</DecorationTitle>
            <DecorationDescription>
              <p>
                Take the most popular and effective mental health assessments.
              </p>
            </DecorationDescription>

            <Link to="/assessment">
              <Button>Search Tests</Button>
            </Link>
          </DecorationData>
        </DecorationContainer>
      </Container>
    </Section>
  );
};

export default FeaturesSection;
