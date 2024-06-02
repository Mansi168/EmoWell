// import  { useState } from "react";
import { HeroContainer, HeroContent, HeroH1, HeroP } from "./Elements";

import { Grid, Typography, Box, keyframes } from "@mui/material";
import bg from "../../assets/home.png";



const HeroSection = () => {
//   const [hover, setHover] = useState(false);

//   const onHover = () => {
//     setHover(!hover);
//   };

  const customH1Styles = {
    background: "-webkit-linear-gradient(120deg, #00008B 20%, #FF930F 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: "50% 50%",
    alignItems : "center",
    fontSize: "95px",
    marginBottom:"50px",
    fontWeight: "600",
    fontFamily: "Exo 2, sans-serif",
    // color: "transparent",
    // margin: "0 !important",
    textAlign:"center",
    color: "#ffffe6",
    textShadow: "-4px 4px #ef3550," +
    "-8px 8px #f48fb1," +
    "-12px 12px #7e57c2," +
    "-16px 16px #2196f3," +
    "-20px 20px #26c6da," +
    "-24px 24px #43a047," +
    "-28px 28px #eeff41," +
    "-32px 32px #f9a825," +
    "-36px 36px #ff5722;",
    "@media screen and (max-width: 480px)": {
      fontSize: "45px",
    },
  };

  const RightSubSectionJSX = (
    // Hero Image
    <img
      data-aos="zoom-in" data-aos-duration="1200"
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
                  data-aos="fade-up" data-aos-duration="1200"
                 style={{color: '#164863',fontFamily:'cursive'}}
              >Wellness Begins Within</HeroH1>
                <Typography variant="h1" color="#ffffe6" sx={customH1Styles} data-aos="fade-up" data-aos-duration="1300">
                Healthy Minds, Happy Lives
                </Typography>
                <HeroP data-aos="fade-right" data-aos-duration="1400">
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
}  
export default HeroSection;