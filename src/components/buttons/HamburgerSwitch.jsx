import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';

const HamburgerSwitchContainer = styled.div`
  position: relative;
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  cursor: pointer;
`;

const HamburgerSwitchMeat = styled.span`
  position: absolute;
  height: ${props => props.meatHeight + 'px'};
  width: 100%;
  border-radius: 9px;
  background-color: ${props => props.color};

  &:nth-child(1) {
    transition: 0.3s ease-in-out;
    top: ${props =>
      props.open
        ? `calc(50% - ${Math.floor(props.meatHeight / 2)}px - 1px)`
        : '0px'};
    width: ${props => (props.open ? 0 : 100)}%;
    left: ${props => (props.open ? 50 : 0)}%;
  }

  &:nth-child(2) {
    transition: 0.3s ease-in-out;
    top: calc(50% - ${props => Math.floor(props.meatHeight / 2) + 'px'} - 1px);
    transform: rotate(${props => (props.open ? 45 : 0)}deg);
  }

  &:nth-child(3) {
    transition: 0.3s ease-in-out;
    top: calc(50% - ${props => Math.floor(props.meatHeight / 2) + 'px'} - 1px);
    transform: rotate(${props => (props.open ? -45 : 0)}deg);
  }

  &:nth-child(4) {
    transition: 0.3s ease-in-out;
    top: calc(
      ${props =>
        props.open
          ? `50% - ${Math.floor(props.meatHeight / 2)}px - 1px`
          : `100% - ${props.meatHeight}px - 1px`}
    );
    width: ${props => (props.open ? 0 : 100)}%;
    left: ${props => (props.open ? 50 : 0)}%;
  }
`;

function HamburgerSwitch(props) {
  const [open, setOpen] = useState(false);

  let { width, height, meatHeight, color, onSwitch } = props;
  width = width ?? 60;
  height = height ?? 45;
  meatHeight = meatHeight ?? 5;
  color = color ?? '#000';
  const childrenProps = { width, height, meatHeight, color, open };

  const toggleOpen = () => {
    setOpen(!open);
    if (onSwitch) {
      onSwitch(!open);
    }
  };

  return (
    <HamburgerSwitchContainer {...childrenProps} onClick={toggleOpen}>
      <HamburgerSwitchMeat {...childrenProps} />
      <HamburgerSwitchMeat {...childrenProps} />
      <HamburgerSwitchMeat {...childrenProps} />
      <HamburgerSwitchMeat {...childrenProps} />
    </HamburgerSwitchContainer>
  );
}

HamburgerSwitch.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  meatHeight: PropTypes.number,
  color: PropTypes.string,
  onSwitch: PropTypes.func,
};

export default HamburgerSwitch;
