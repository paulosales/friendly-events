import React from 'react'
import styled from "styled-components";
import { LIGHT, SECONDARY, GRAY } from "../theme";
import { FormattedMessage } from 'react-intl';
import ButtonIcon from './ButtonIcon';

const Button = styled.a`
  width: 49%;
  height: 110px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 4.35em;
  background-color: ${SECONDARY};
  color: ${LIGHT};
  text-decoration: none;

  transition: all 0.4s ease-in-out;

  &:visited, &:active, &:focus {
    background-color: ${SECONDARY};
    color: ${LIGHT};
    text-decoration: none;
  }

  &:hover {
    background-color: ${LIGHT};
    text-decoration: none;
    color: ${GRAY};
  }

  @media screen and (max-width: 424px) {
    height: 90px;
    font-size: 3.35em;
  }  

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

const JoinEventButton = function () {
  return (<Button href="https://www.eventbrite.com.br/e/arrocha-o-no-2020-tickets-92189231473" target="_new">
    <ButtonIcon className="fa fa-ticket-alt"/>
    <FormattedMessage id="event.join" defaultMessage="Join The Event"/>
  </Button>)
}


export default JoinEventButton
