import styled from "styled-components";
import {PRIMARY, LIGHT, TRANSPARENT, WHITE} from '../theme'

export const HeaderContainer = styled.section`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  height: 77px;
  overflow: visible;
  z-index: 2;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
    overflow: hidden;
    position: relative;
    align-items: center;
  }
`

export const LogoContainer = styled.div`
  background-color: ${props => (props.highlighted?LIGHT:TRANSPARENT)};
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 767px) {
    width: 95%;
    display: flex;
    justify-content: center;
    background-color: ${WHITE};
  }
`

export const Logo = styled.img`
  width: 120px;
`

export const TopMenu = styled.nav`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 16px;
  align-items: center;
  
  transition: all 0.3s ease-in-out;

  background-color: ${props => (props.highlighted?LIGHT:TRANSPARENT)};
  border: 1px solid ${props => (props.highlighted?LIGHT:TRANSPARENT)};

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${PRIMARY};
    border: 1px solid ${PRIMARY};
    height: ${props=>props.menuOpened?'auto':'50px'};
  }
`

export const MenuMobileHeader = styled.div`
  display: none;
  min-height: 50px;
  width: 95%;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

export const MenuItemIcon = styled.i`
  @media screen and (max-width: 767px) {
    display: none;
  }
  
`

export const MenuItem = styled.a`
  font-family: "Xilosa";
  font-size: 17pt;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  border-left: 1px solid ${props => (props.highlighted?"rgba(0, 0, 0, 0.1)":TRANSPARENT)};
  word-wrap: break-word;
  color: ${props => (props.highlighted? PRIMARY : LIGHT) };
  text-decoration: none;

  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 767px) {
    border-left: none;
    flex-direction: row;
    justify-items: baseline;
    font-size: 25pt;
    width: 95%;
    border-top: 1px solid ${TRANSPARENT};
    color: ${LIGHT};
  }

  &:focus {
    text-decoration: none;
    color: ${LIGHT};
    background-color: none;
  }

  &:active {
    text-decoration: none;
    color: ${LIGHT};
    background-color: none;
  }

  &:visited {
    text-decoration: none;
    color: ${props => (props.highlighted? PRIMARY : LIGHT) };
    background-color: none;

    @media screen and (max-width: 767px) {
      color: ${LIGHT};
    }
  }

  &:hover {
    text-decoration: none;
    color: ${LIGHT};
    background-color: ${ PRIMARY }
  }
`
