import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import img1 from "../assets/img1.png";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/img-3.png";
import img4 from "../assets/MH.avif"

const Section = styled.section`
  padding: 4rem 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
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
  flex-wrap: nowrap;
  gap: 2rem;
  justify-content: center;
   @media screen and (max-width: 800px) {
    flex-direction: column;
  }
    @media screen and (min-width:801px) and (max-width: 1200px) {
    flex-wrap:wrap;
  }
`;

const DecorationData = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 6px rgba(65, 11, 16, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  width: calc(25% - 1rem);
  max-width: 250px;
  flex: 1 0 auto;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    width:550px;
  }
`;

const DecorationImg = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const DecorationTitle = styled.h3`
  font-size: 1.5rem;
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
  margin-top: 1rem;

  &:hover {
    background-color: rgba(43, 57, 74, 0.85);
    text-decoration: none;
  }
`;

const FeaturesSection = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Section id="featureSection">
      <Title data-aos="fade-up">Our Features</Title>
      <Container>
        <DecorationContainer>
          <DecorationData data-aos="fade-up">
            <DecorationImg src={img1} alt="Reading Area" />
            <DecorationTitle>Reading Area</DecorationTitle>
            <p>
              Ready to unwind and let loose? Discover actionable mental health
              and wellbeing advice.
            </p>
            <Link to="/readingarea">
              <Button>Read Now</Button>
            </Link>
          </DecorationData>

          <DecorationData data-aos="fade-down">
            <DecorationImg src={img2} alt="Explore Games" />
            <DecorationTitle>Explore Games</DecorationTitle>
            <p>
              Experience the joy of play to relax and rejuvenate! Dive into our
              games for a refreshing escape.
            </p>
            <Link to="/games">
              <Button>Play Now</Button>
            </Link>
          </DecorationData>

          <DecorationData data-aos="fade-up">
            <DecorationImg src={img3} alt="Chat Bot" />
            <DecorationTitle>Chat Bot</DecorationTitle>
            <p>
              Engage in a lively chat with our friendly bot for a fun and
              helpful interaction!
            </p>
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
            <p>
              Engage in a lively chat with our friendly bot for a fun and
              helpful interaction!
            </p>
            {isAuthenticated ? (
              <Link to="/forum">
                <Button>Learn More</Button>
              </Link>
            ) : (
              <Button onClick={() => loginWithRedirect()}>Learn More</Button>
            )}
          </DecorationData>
          <DecorationData data-aos="fade-up">
            <DecorationImg
              src={img4}
              alt="MH"
            />
          <DecorationTitle>Mental Health Tests</DecorationTitle>
            <p>
              Take the most popular and effective mental health assessments.
            </p>
            
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
