import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { Nav, NavbarContainer, NavImg, NavMenu, NavItem, NavLinks, MobileIcon, NavLogo, SubLogo, Dropdown, DropdownContent, ButtonDropdown } from "./NavbarElements";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/logo.png";
import styled from "styled-components";

import { useNavigate } from "react-router";
import ProgressBar from "./Progressbar";



const Button = styled.button`
  padding: 5px 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  background: rgb(48, 175, 91);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(5px);
    background: #2b394a;
    color: #fff;
    border: 1px solid rgb(48, 175, 91);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -120; // Adjust this value as needed
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  return (
    <>

      
      <Nav
        style={{
          background: "#2B394A",
        }}
      >
        

      <Nav>

        <NavbarContainer>
          <NavImg>
            <Link to="/" onClick={handleLogoClick}>
              <img src={logo} alt="Logo" height="60" />
            </Link>
            <NavLogo to="/" onClick={handleLogoClick}>
              EmoWell
              <SubLogo>EMBRACE Wellness</SubLogo>
            </NavLogo>
          </NavImg>

          <MobileIcon onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <NavMenu isOpen={isOpen}>
            <NavItem>
              <NavLinks to="/" onClick={handleLogoClick}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/#about" onClick={() => handleNavClick('/', 'about')}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/#Features" onClick={() => handleNavClick('/', 'featureSection')}>Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact" onClick={handleLogoClick}>Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/review" onClick={handleLogoClick}>Review</NavLinks>
            </NavItem>
            {isAuthenticated ? (
              <li>
                <Dropdown>
                  <FontAwesomeIcon icon={faUser} style={{ color: '#fff' }} />
                  <ButtonDropdown onClick={toggleDropdown}>Account
                    <FontAwesomeIcon icon={faCaretDown} style={{ color: '#fff' }} />
                  </ButtonDropdown>
                  {isOpen && (
                    <DropdownContent>
                      <a href="/profile">User Profile</a>
                      <button onClick={() => logout({ returnTo: window.location.origin })} style={{ fontSize: '16px', fontWeight: '600' }}>
                        Log Out
                      </button>
                    </DropdownContent>
                  )}
                </Dropdown>
              </li>
            ) : (
              <li>
                <Button onClick={() => loginWithRedirect()} style={{ border: '1px solid rgb(48,175,91)' }}>
                  Register
                </Button>
              </li>
            )}
            
          </NavMenu>
          
        </NavbarContainer>
        
      </Nav>
      <ProgressBar/>
    </>
  );
};

export default Navbar;
