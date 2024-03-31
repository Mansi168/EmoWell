import React from 'react'

import styled from 'styled-components';

// Define styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
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
  background-color: rgb(48, 175, 91); /* Adjust color as needed */
  padding: 38px;
  margin-bottom: 15px;
  max-width: 400px; /* Adjust max-width as needed for different screen sizes */
  border-radius: 22px;
  position: relative;
  width: 60%;
  overflow: hidden;
  
  @media (min-width: 1024px) { /* lg breakpoint */

    max-width: 680px;
    padding: 20px;
    margin: 30px;
  }

  @media (min-width: 1280px) { /* xl breakpoint */
    border-radius: 30px;
    padding: 28px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  text-transform: capitalize;
  color: #fff;
  
  @media (min-width: 768px) { /* md breakpoint */
    font-size: 32px;
  }

  @media (min-width: 1440px) { /* 2xl breakpoint */
    font-size: 64px;
  }
`;

const Paragraph = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
  margin-top: 5px;
  
  @media (min-width: 1280px) { /* xl breakpoint */
    font-size: 16px;
  }
`;
const CampsContainer = styled.div`
// overflow-x: auto;
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
width: auto;
height: 140px;

@media (min-width: 1024px) { /* lg breakpoint */
  height: 200px;
}

@media (min-width: 1280px) { /* xl breakpoint */
  height: 640px;
}
`;

// Define a styled component for each CampSite
const CampSite = styled.div`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px; /* Adjust as needed */
  width: 100%;
  height: 100%;
`;


const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  justify-content: space-between;
  gap: 5px; /* Adjust gap as needed */
  
  @media (min-width: 1024px) { /* lg breakpoint */
    gap: 10px;
  }
`;
// Convert the code
const CampContent = () => {
  return (
    <Container>
    <CampsContainer className="hide-scrollbar">
      <CampSite 
        backgroundImage="/11098.jpg"
        title="Putuk Truno Camp"
        subtitle="Prigen, Pasuruan"
        peopleJoined="50+ Joined"
      />
      {/* <CampSite 
        backgroundImage="img-1.png"
        title="Mountain View Camp"
        subtitle="Somewhere in the Wilderness"
        peopleJoined="50+ Joined"
      /> */}
      <GreenBox>
        <Title>
          <strong>Feeling Lost</strong> And Not Knowing The Way?
        </Title>
        <Paragraph>
          Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
        </Paragraph>
      </GreenBox>
    </CampsContainer>
    {/* <FlexEndContainer> */}
      
    {/* </FlexEndContainer> */}
    
    </Container>
  );
};

export default CampContent;


