import { useState } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import logo from "../../assets/logo.png";
// import { LocationOn, Phone, Mail} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLogo,
  FooterLink,
  SocialLogo,
  WebsiteRights,
  Footerbg,
  FooterLinkInitial,
} from "./FooterElements";
import { Height, Padding } from "@mui/icons-material";
import { blue } from "@mui/material/colors";

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [setIsActive] = useState(false);
  const removeActive = () => {
    setIsActive(false);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Footerbg>.</Footerbg>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems className="socials">
                <FooterLogo src={logo} />{" "}
                <SocialLogo onClick={handleClick}>EmoWell</SocialLogo>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle style={{minWidth:"0px"}}><FooterLinkInitial><span style={{fontSize: "38px"}}>O</span></FooterLinkInitial>ur Contacts</FooterLinkTitle>
                <FooterLinkItems>
                  <ListItem>
                    <ListItemIcon style={{minWidth:"0px"}}>
                      {/* <LocationOn style={{ marginRight: '0.5rem',color:' #FDA5A4' }} /> */}
                    <lord-icon
                      style={{
                        Height: "25px",
                        width: "25px",
                        // position: "absolute",

                        // marginLeft: "-26px"
                      }}
                      src="https://cdn.lordicon.com/surcxhka.json"
                      trigger="hover"
                      stroke="bold"
                      colors="primary:#ffffff,secondary:#ffffff"></lord-icon>{" "}
                    </ListItemIcon>
                    <ListItemText primary="ABCDEF, Rohini, ND-India" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon style={{minWidth:"0px"}}>
                      {/* <Phone style={{ marginRight: '0.5rem',color:' #FDA5A4' }} /> */}
                    <lord-icon
                      style={{
                        Height: "25px",
                        width: "25px",
                      }}
                      src="https://cdn.lordicon.com/srsgifqc.json"
                      trigger="hover"
                      colors="primary:#ffffff"></lord-icon>{" "}
                    </ListItemIcon>
                    <ListItemText primary="+012 345 67890" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon style={{minWidth:"0px"}}>
                      {/* <Mail style={{ marginRight: '0.5rem',color:' #FDA5A4' }} /> */}
                    <lord-icon
                      style={{
                        Height: "25px",
                        width: "25px",
                      }}
                      src="https://cdn.lordicon.com/xtzvywzp.json"
                      trigger="hover"
                      colors="primary:#ffffff"></lord-icon>{" "}
                    </ListItemIcon>
                    <ListItemText primary="abcdef@gmail.com" />
                  </ListItem>
                </FooterLinkItems>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle><FooterLinkInitial><span style={{fontSize: "38px"}}>Q</span></FooterLinkInitial>uick Links</FooterLinkTitle>
                <FooterLinkItems>
                  <ListItem>
                    <FooterLink onClick={() => scrollToSection("about")}>
                      <ListItemText primary="About" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink to="/contact">
                      <ListItemText primary="Contact" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink
                      onClick={() => scrollToSection("featureSection")}
                      className="footer-link">
                      <ListItemText primary="Services" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink to="/faq">
                      <ListItemText primary="FAQs" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink to="/privacy">
                      <ListItemText primary="Privacy and Policy" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink to="/terms">
                      <ListItemText primary="Terms And Conditions" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink to="/community">
                      <ListItemText primary="Community" />
                    </FooterLink>
                  </ListItem>

                  {/* <ListItem>
      <FooterLink to="/donate" className="footer-link">
        <ListItemText primary="Support and Donate" />
      </FooterLink>
    </ListItem> */}
                </FooterLinkItems>
              </FooterLinkItems>

              <FooterLinkItems>
                
                <FooterLinkTitle><FooterLinkInitial><span style={{fontSize: "38px"}}>B</span></FooterLinkInitial>usiness Hours</FooterLinkTitle>
                <FooterLinkItems style={{marginRight: "50px"}}>
                  <ListItem>
                    <ListItemText primary="Monday - Friday" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Saturday" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Sunday" />
                  </ListItem>
                </FooterLinkItems>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          
          <WebsiteRights>
            EmoWell © {new Date().getFullYear()}&nbsp;All rights reserved.
          </WebsiteRights>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;