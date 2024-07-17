import styled from 'styled-components';
import stress from "../assets/stress.jpg"
// Define styled components
const Container = styled.div`
    display: flex;
    justify-content: center;
    //position: relative;
    height: 80vh;
    width: 100%;
`;
const FlexEndContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-top: 10px;
    padding-right: 6px; /* Adjust as needed */
    margin-right: -60px; /* Adjust as needed for lg screen */
    align-items: center;
`;

const GreenBox = styled.div`
    max-width: 40vw;
    max-height: 500px;
    padding: 1.5rem;
    background-color: rgb(48, 175, 91); /* Adjust color as needed */
    border-radius: 22px;
    position: relative;
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        //min-width: 90%;
        padding: 1.5rem;
    }

    @media screen and (max-width: 500px) {
        min-width: 90%;
        margin-top: 1rem;
        margin-left: 2rem;
        margin-bottom: 3rem;
    }
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 1.4;
    text-transform: capitalize;
    color: #fff;

    @media (min-width: 768px) {
        /* md breakpoint */
        font-size: 32px;
    }

    @media (min-width: 1440px) {
        /* 2xl breakpoint */
        font-size: 64px;
    }
`;

const Paragraph = styled.p`
    font-size: 14px;
    line-height: 1.6;
    color: #fff;
    margin-top: 5px;

    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        font-size: 12px;
    }

    @media (min-width: 1280px) {
        /* xl breakpoint */
        font-size: 16px;
    }
`;
const AboutContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 1rem;

    @media screen and (max-width: 500px) {
        flex-direction: column;
    }
`;

// Define a styled component for each CampSite
const CampSite = styled.div`
    background-image: ${({backgroundImage}) => `url(${backgroundImage})`};
    background-size: cover;
    background-repeat: no-repeat;
    //border-radius: 10px; /* Adjust as needed */
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
    min-width: 200px;
    max-width: 700px;

    @media screen and (max-width: 500px) {
        width: 250px;
        margin-top: 5rem;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 25px;
    justify-content: space-between;
    gap: 5px; /* Adjust gap as needed */

    @media (min-width: 1024px) {
        /* lg breakpoint */
        gap: 10px;
    }
`;
// Convert the code
const CampContent = () => {
    return (
        <Container id="about">
            <AboutContainer className="hide-scrollbar">
                {/*<CampSite*/}
                {/*    backgroundImage={stress}*/}
                {/*    title="About Us"*/}
                {/*    data-aos="fade-up"*/}
                {/*    data-aos-delay="100"*/}
                {/*/>*/}

                <ImageContainer
                    title="About Us"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <img src={stress}/>
                </ImageContainer>

                {/* <CampSite
        backgroundImage="img-1.png"
        title="Mountain View Camp"
        subtitle="Somewhere in the Wilderness"
        peopleJoined="50+ Joined"
      /> */}
                <GreenBox data-aos="zoom-in"
                          data-aos-delay="200">
                    <Title data-aos="fade-up">
                        <strong>Feeling Lost</strong> And Not Knowing The Way?
                    </Title>
                    <Paragraph data-aos="fade-up">
                        Our platform is designed to provide you with the tools and resources you need to prioritize your
                        emotional health. Whether you're looking for a chatbot to talk about your mental health,
                        engaging activities to lift your mood, or a supportive community to connect with, Emowell has
                        you covered.
                    </Paragraph>
                </GreenBox>
            </AboutContainer>
            {/* <FlexEndContainer> */}

            {/* </FlexEndContainer> */}

        </Container>
    );
};

export default CampContent;


