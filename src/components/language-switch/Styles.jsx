import styled from 'styled-components';
import { LIGHT, PRIMARY } from '../theme';

export const LanguageSwitchContainer = styled.a`
  font-family: 'Xilosa';
  font-size: 17pt;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  word-wrap: break-word;
  color: ${props => (props.highlighted ? PRIMARY : LIGHT)};
  text-decoration: none;

  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 767px) {
    position: absolute;
    left: 3%;
    top: 102px;
    flex-direction: row;
    justify-items: baseline;
    font-size: 25pt;
    color: ${LIGHT};
    height: 40px;
    background-color: ${PRIMARY};
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
    color: ${props => (props.highlighted ? PRIMARY : LIGHT)};
    background-color: none;

    @media screen and (max-width: 767px) {
      color: ${LIGHT};
    }
  }

  &:hover {
    text-decoration: none;
    color: ${LIGHT};
    background-color: ${PRIMARY};
  }
`;
export const LanguageSwitchIcon = styled.i`
  @media screen and (max-width: 767px) {
    padding-right: 5px;
    display: none;
  }
`;
