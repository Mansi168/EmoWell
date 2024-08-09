import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.nav`
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  height: 80px;
  background: #2b394a;
  z-index: 19;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

export const NavImg = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    color: rgb(85, 253, 142);
    
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 950px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 950px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background: #2b394a;
    padding: 20px 0;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 15px;
  height: auto;
  cursor: pointer;
  border: 1px solid #05f8cb;
  border-radius: 30px;
  margin: 0 10px; /* Adds space between the nav links */
  font-size: 1.4rem;

  &:hover {
    background: rgb(48, 175, 91);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 100%;
    text-align: center;
  }
`;

export const SubLogo = styled.span`
  font-size: 0.9rem;
  color: #fff;

  @media screen and (max-width: 468px) {
    font-size: 8px;
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
  }

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  button {
    background: none;
    border: none;
    padding: 12px 16px;
    width: 100%;
    text-align: left;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }
`;

export const ButtonDropdown = styled.button`
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  border: none;
  margin: 0;
  cursor: pointer;
`;