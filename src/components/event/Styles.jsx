import styled from 'styled-components';
import { GRAY, WHITE, TRANSPARENT_DARK, PRIMARY } from '../theme';

export const EventContainer = styled.section`
  background-color: ${GRAY};
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1183px) {
    align-items: center;
  }
`;

export const EventCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1183px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const EventCard = styled.div`
  width: 45%;
  border: rgba(255, 255, 255, 0.2) 1px solid;
  margin-top: 60px;
  margin-bottom: 40px;
  padding-top: 0.5em;
  padding-bottom: 1.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 280px;
  align-items: center;

  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 1183px) {
    width: 90%;
  }

  &:hover {
    border-color: ${props => props.borderColor};
    background-color: ${TRANSPARENT_DARK};
  }
`;

export const EventCardTitle = styled.h3`
  color: ${WHITE};
  font-size: 4em;
  padding-bottom: 0.5em;
  width: 90%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const EventCardDetail = styled.div`
  padding-top: 0.35em;
  color: ${WHITE};
  font-size: 2.6em;
`;

export const EventCardIcon = styled.i`
  margin-top: -25px;
  color: ${WHITE};
  font-size: 25pt;
`;

export const ButtonGetDirections = styled.a`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  background-color: ${TRANSPARENT_DARK};
  color: ${WHITE};
  font-size: 25pt;
  padding: 0.5em 1.25em;
  text-transform: uppercase;

  transition: all 0.4s ease-in-out;

  &:hover {
    color: ${WHITE};
    text-decoration: none;
    background-color: ${PRIMARY};
  }
`;
