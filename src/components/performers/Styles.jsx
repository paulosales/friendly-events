import styled from 'styled-components';
import {
  WHITE,
  TRANSPARENT_DARK,
  TRANSPARENT,
  SECONDARY,
  DARK,
} from '../theme';

export const PerformersContainer = styled.section`
  background-image: url(/images/slide5.jpg);
  width: 100%;
  background-attachment: fixed;
  background-size: cover;
`;

export const PerformersContainerOverlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${TRANSPARENT_DARK};
`;

export const PerformersTitle = styled.h2`
  text-align: center;
  color: ${WHITE};
  font-size: 3.9em;
  text-transform: uppercase;
  padding-top: 20px;
`;

export const PerformersContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
`;

export const PerformerContainer = styled.div`
  position: ${props => (props.fullScreen ? 'absolute' : 'relative')};
  z-index: ${props => (props.fullScreen ? '2' : '0')};
  width: ${props => (props.fullScreen ? '100%' : '370px')};
  height: ${props => (props.fullScreen ? '100%' : 'auto')};
  margin-bottom: 20px;
  border: 10px solid transparent;
  transition: all 0.3s ease-in-out;
  background-color: ${props => (props.fullScreen ? DARK : 'none')};

  &:hover {
    background-color: ${props => (props.fullScreen ? DARK : TRANSPARENT)};
  }
`;

export const PerformerPhotoContainer = styled.div`
  border: 10px solid #fff;
  position: relative;
  display: inline-block;

  &::before {
    content: '\f0dd';
    font-family: 'Font Awesome 5 Free';
    font-size: 5em;
    font-weight: 900;
    color: #fff;
    position: absolute;
    text-align: center;
    bottom: -0.7em;
    width: 100%;
  }
`;

export const PerformerPhoto = styled.img`
  width: 330px;
`;

export const PerformerName = styled.h4`
  margin-top: 25px;
  color: ${WHITE};
  font-size: 2.1em;
  text-align: center;
  font-weight: bold;
`;

export const PerformerCity = styled.div`
  color: ${WHITE};
  font-size: 1.5em;
  text-align: center;
`;

export const PerformerCityIcon = styled.i`
  color: ${SECONDARY};
  margin-right: 10px;
`;
