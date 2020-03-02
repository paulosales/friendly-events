import styled from "styled-components";

import {SECONDARY} from '../theme'

export const SlideImage = styled.img`
  opacity: 0.7;
  height: 844px;
  width: 100%;
  object-fit: cover;
`

export const SlideCaption = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(/images/opaqueBG.png) repeat 0 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
`;

export const SlideCaptionContainer = styled.div`
  text-align: center;
  width: 80%;
  border: 1px solid #FFF;
  padding: 0.5em;
  max-width: 950px;

  @media screen and (max-width: 900px) {
    margin-top: -200px;
  }
`

export const SlideCaptionBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid #FFF;
  width: 100%;
  padding: 3em;
`

export const CaptionText = styled.h1`
  color: #fff;
  line-height: 1.15em;
  font-size: 5em;
  text-transform: uppercase;
  font-weight: 400;

  @media screen and (max-width: 767px) {
    font-size: 3em;
  }
`

export const CaptionSubText = styled.span`
  font-size: 1.5em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #FFF;
  padding-top: 1em;
  margin-top: 1em;
  border-top-width: 2px;
  border-style: solid none none;
  border-color: ${SECONDARY};
`