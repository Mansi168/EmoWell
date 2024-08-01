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
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  padding: 1rem 5rem;
  flex-direction: column;
  @media (max-width: 786px) {
    padding: 20rem 2rem;
  }
  @media (max-width: 360px) {
    padding: 20rem 1rem;
  }
`;

// Footer links container
export const FooterLinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  // justify-content: right;
`;

// Footer links wrapper
export const FooterLinksWrapper = styled.div`
  @media (max-width: 786px) {
    display: grid;
    gap: 0.7rem;
    grid-template-columns: 1.3fr;
    justify-items: start;
    align-items: center;
    padding: 10px;
  }
  width: 100%;
  grid-template-columns: 1.3fr 1.3fr 1.3fr 1.3fr;

  @media (min-width: 786px) {
    &:nth-child(n) {
      display: grid;
      grid-template-columns: 1.3fr 1.3fr 1.3fr 1.3fr;
      justify-content: space-around;
      align-self: inherit;
      align-content: center;
      justify-content: center;
    }
    &:nth-child(2) {
      width: 100%;
      display: grid;
      align-self: left;
      align-content: left; // ######
      justify-content: left; // ######
    }
  }
`;

// Footer link items
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #fff;
  font-family: Poppins;
  align-items: left;
  // margin-right: 10px;

  &.socials {
    display: flex;
    flex-direction: row;
    grid-template-columns: repeat(6, 1fr);
    align-items: left;
    gap: 0.5px;
    margin-top: 1px;
  }
  @media (min-width: 320px) {
    align-items: center;
    &.socials {
      margin: 1rem;
    }
  }
  @media (min-width: 786px) {
    text-align: left;
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
  color: rgb(85 253 142);
  text-transform: uppercase;
  border-left: 4px solid lime;
  padding-left: 3px;
  text-align: left;
`;
export const FooterLinkInitial = styled.span`
  color: Lime;
`;

export const Footerbg = styled.div`
  position: relative;
  background-color: rgb(48, 175, 91);
  margin-top: 50px;
`;

export const FooterLink = styled(Link)`
  margin: 0px;
  font-size: 16px;
  color: #fff;
  /* display: flex;
  flex-direction: column; */
  &:hover {
    color: lime;
    text-decoration: none;
  }
  /* @media (min-width: 320px) {
    align-items: center;
  } */
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
    margin-left: 1rem;
  }
`;

export const SocialMediaWrap = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

// Social logo
export const SocialLogo = styled(Link)`
  /* Your styles for SocialLogo */
  color: rgb(255, 255, 255);
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  // margin-top: -190px;
  // border-bottom: 4px solid lime;

  &:hover {
    color: rgb(85 253 142);
    text-decoration: none;
  }
  @media (min-width: 450px) {
    margin-bottom: 6rem;
  }
  @keyframes shine {
    from {
      mask-position: 150%;
    }

    to {
      mask-position: -50%;
    }
  }
`;

// Website rights
export const WebsiteRights = styled.small`
  color: lime;
  font-size: 16px;
`;

