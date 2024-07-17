import styled from "styled-components";
import { Link } from "react-router-dom";

// Footer container
export const FooterContainer = styled.footer`
  background: rgb(43, 57, 74);
  padding-top: 2rem;
  padding-bottom: 1rem;
  z-index: 99;
`;

// Footer wrap
export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1100px;
  flex-direction: column;
`;

// Footer links container
export const FooterLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Footer links wrapper
export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1.3fr);
  gap: 1rem;
  width: 100%;

  @media (max-width: 786px) {
    grid-template-columns: 1fr;
    justify-items: start;
    align-items: center;
    padding: 10px;
  }
`;

// Footer link items
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #fff;
  font-family: Poppins;
  align-items: flex-start;

  &.socials {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;

    @media (min-width: 320px) {
      margin: 1rem;
    }
  }
`;

// Footer link title
export const FooterLinkTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  display: inline-block;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  color: rgb(85, 253, 142);
  text-transform: uppercase;
  border-left: 4px solid lime;
  padding-left: 3px;
  text-align: left;
`;

export const FooterLinkInitial = styled.span`
  color: lime;
`;

export const Footerbg = styled.div`
  position: relative;
  background-color: rgb(48, 175, 91);
  margin-top: 50px;
`;

export const FooterLink = styled(Link)`
  margin: 0;
  font-size: 16px;
  color: #fff;

  &:hover {
    color: lime;
    text-decoration: none;
  }
`;

export const FooterLogo = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  border-left: 4px solid lime;
  padding-left: 3px;
  border-bottom: 4px solid lime;

  @media (min-width: 450px) {
    margin-bottom: 6rem;
  }

  @media (max-width: 400px) {
    margin-left: 5rem;
  }
`;

export const SocialMediaWrap = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Social logo
export const SocialLogo = styled(Link)`
  color: rgb(255, 255, 255);
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    color: rgb(85, 253, 142);
    text-decoration: none;
  }

  @media (min-width: 450px) {
    margin-bottom: 6rem;
  }
`;

// Website rights
export const WebsiteRights = styled.small`
  color: lime;
  font-size: 16px;
`;
