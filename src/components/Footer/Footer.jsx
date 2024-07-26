import { useState } from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import logo from "../../assets/logo.png";
import './Footer.css';

// import { LocationOn, Phone, Mail} from '@mui/icons-material';
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleClick = (sectionId) => {
    navigate("/"); // Navigate to the home page
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // Scroll to top
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" }); // Scroll to section if sectionId is provided
        }
      }
    }, 100); // Delay to ensure navigation occurs before scrolling
  };

  const [setIsActive] = useState(false);
  const removeActive = () => {
    setIsActive(false);
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
                <SocialLogo onClick={() => handleClick()}>EmoWell</SocialLogo>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle id="title" style={{ minWidth: "0px"}}>
                  <FooterLinkInitial>
                    <span style={{ fontSize: "38px" }}>O</span>
                  </FooterLinkInitial>
                  ur Contacts
                </FooterLinkTitle>
                <FooterLinkItems>
                  <ListItem>
                    <ListItemIcon style={{ minWidth: "0px" }}>
                      {/* <LocationOn style={{ marginRight: '0.5rem',color:' #FDA5A4' }} /> */}
                      <lord-icon
                        style={{
                          Height: "25px",
                          width: "25px",
                        }}
                        src="https://cdn.lordicon.com/surcxhka.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#ffffff,secondary:#ffffff"
                      ></lord-icon>{" "}
                    </ListItemIcon>
                    <ListItemText primary="ABCDEF, Rohini, ND-India" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon style={{ minWidth: "0px" }}>
                      {/* <Phone style={{ marginRight: '0.5rem',color:' #FDA5A4' }} /> */}
                      <lord-icon
                        style={{
                          Height: "25px",
                          width: "25px",
                        }}
                        src="https://cdn.lordicon.com/srsgifqc.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                      ></lord-icon>{" "}
                    </ListItemIcon>
                    <a href="tel:+01234567890" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <ListItemText primary="+012 345 67890" />
                    </a>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon style={{ minWidth: "0px" }}>
                      {/* <Mail style={{ marginRight: '0.5rem',color:' #FDA5A4' }} /> */}
                      <lord-icon
                        style={{
                          Height: "25px",
                          width: "25px",
                        }}
                        src="https://cdn.lordicon.com/xtzvywzp.json"
                        trigger="hover"
                        colors="primary:#ffffff"
                      ></lord-icon>{" "}
                    </ListItemIcon>
                    <a href="mailto:abcdef@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <ListItemText primary="abcdef@gmail.com" />
                    </a>
                  </ListItem>
                </FooterLinkItems>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>
                  <FooterLinkInitial>
                    <span style={{ fontSize: "38px" }}>Q</span>
                  </FooterLinkInitial>
                  uick Links
                </FooterLinkTitle>
                <FooterLinkItems>
                  <ListItem>
                    <FooterLink
                      to="/#about"
                      onClick={() => handleClick("about")}
                      className="footer-link"
                    >
                      <ListItemText primary="About" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink
                      to="/contact"
                      onClick={() => handleClick("contact")}
                      className="footer-link"
                    >
                      <ListItemText primary="Contact" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink
                      to="/services"
                      onClick={() => handleClick("featureSection")}
                      className="footer-link"
                    >
                      <ListItemText primary="Services" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink
                      to="/faq"
                      onClick={() => handleClick("faq")}
                      className="footer-link"
                    >
                      <ListItemText primary="FAQs" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink
                      to="/privacy"
                      onClick={() => handleClick("privacy")}
                      className="footer-link"
                    >
                      <ListItemText primary="Privacy and Policy" />
                    </FooterLink>
                  </ListItem>
                  <ListItem>
                    <FooterLink
                      to="/community"
                      onClick={() => handleClick("community")}
                      className="footer-link"
                    >
                      <ListItemText primary="Community" />
                    </FooterLink>
                  </ListItem>
                </FooterLinkItems>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>
                  <FooterLinkInitial>
                    <span style={{ fontSize: "38px" }}>B</span>
                  </FooterLinkInitial>
                  usiness Hours
                </FooterLinkTitle>
                <FooterLinkItems style={{ marginRight: "50px" }}>
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
