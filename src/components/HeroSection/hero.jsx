// import  { useState } from "react";
import {HeroContainer, HeroContent, HeroH1, HeroP} from "./Elements";

import {Grid, Typography, Box} from "@mui/material";
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
        display: "flex",
        flexDirection: "column",
        // gap:"-2rem",
        alignItems: "center",
        fontSize: "7rem",
        marginBottom: "50px",
        fontWeight: "bold",
        // fontFamily: "Exo 2, sans-serif",
        // fontFamily: "VT323, monospace",
        // color: "transparent",
        // margin: "0 !important",
        textAlign: "center",
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
        "@media screen and (max-width: 1400px)": {
            fontSize: "5.5rem",
        },
        "@media screen and (max-width: 1000px)": {
            fontSize: "4rem",
            marginLeft: "1rem",
        },
        "@media screen and (max-width: 480px)": {
            fontSize: "3.7rem",
        },
    };

    const RightSubSectionJSX = (
        // Hero Image
        <img
            src={bg}
            alt="hero_image"
            style={{
                borderRadius: "100%",
                width: "100%",
                marginBottom: "2rem",
                height: "auto",
                objectFit: "contain",
                overflow: "hidden",
            }}
        />
    );

    return (
        <>
            <Box
                sx={{position: "relative"}}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    width: "100%",
                    marginTop: "100px",
                    // height: "100vh"
                }}>

                {/* text + image */}
                <Grid container style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}}>

                    {/*text*/}
                    <Grid item xs={12} md={6} sx={{
                        backgroundColor: "#fff",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex"
                    }}>
                        <HeroContainer>
                            <HeroContent>
                                <HeroH1
                                    style={{color: '#164863', fontFamily: 'cursive', fontWeight: "100", width: "100%"}}
                                    data-aos="fade-up"
                                >Wellness Begins Within</HeroH1>
                                <Typography variant="h1" color="#ffffe6" sx={customH1Styles} data-aos="zoom-in">
                                    Healthy Minds,
                                    Happy Lives
                                </Typography>
                                <HeroP data-aos="fade-up" style={{textAlign: "center"}}>
                                    We strive to create a community where every voice is heard, respected and
                                    celebrated.
                                </HeroP>
                            </HeroContent>
                        </HeroContainer>
                    </Grid>

                    {/*image */}
                    <Grid item xs={12} md={6} sx={{backgroundColor: "#fff"}}
                          style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}
                          data-aos="zoom-in" data-aos-duration="1300">
                        <div style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "100%",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            {RightSubSectionJSX}
                        </div>
                    </Grid>

                </Grid>

            </Box>
        </>
    );
}
export default HeroSection;