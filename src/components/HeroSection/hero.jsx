import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroP } from "./Elements";
import { Grid, Typography, Box } from "@mui/material";
import bg from "../../assets/home.png";
import '../../App.css';  // Import the App.css file

const HeroSection = () => {
  const RightSubSectionJSX = (
    <img
      src={bg}
      alt="hero_image"
      style={{
        width: "100vh",
        margin: "0 auto",
        height: "auto",
        objectFit: "contain",
        overflow: "hidden",
      }}
    />
  );

  return (
    <>
      <Box 
        sx={{ position: "relative" }} 
        style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", width: "100%" }}>
        <Grid container style={{ width: "100%" }}>
          <Grid item xs={12} md={6} sx={{ backgroundColor: "#fff" }}>
            <HeroContainer>
              <HeroContent
                style={{ marginTop: "10vh", marginLeft: "5vw" }}
              >
              <HeroH1
                 style={{color: '#164863',fontFamily:'cursive'}}
              >Wellness Begins Within</HeroH1>
                <Typography variant="h1" color="#ffffe6" sx={customH1Styles} >
                Healthy Minds, Happy Lives
                </Typography>
                <HeroP  data-aos="fade-up">
                  We strive to create a community where every voice is heard, respected and celebrated.
                </HeroP>
              </HeroContent>
            </HeroContainer>
          </Grid>
          <Grid item xs={12} md={6} sx={{ backgroundColor: "#fff" }} style={{ display: "flex", justifyContent: "center", alignItems: "left",height:"100vh" }}>
            {RightSubSectionJSX}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
