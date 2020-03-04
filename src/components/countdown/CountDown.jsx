import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { PRIMARY, LIGHT, TRANSPARENT } from '../theme';
import { formatDigits, useLiveCountDown } from '../../helpers/count-down';

const CountDownContainer = styled.div`
  width: 49%;
  height: 110px;
  display: inline-flex;
  justify-content: flex-end;
  background-color: ${PRIMARY};
  color: ${LIGHT};

  @media screen and (max-width: 424px) {
    height: 90px;
  }

  @media screen and (max-width: 900px) {
    justify-content: center;
    width: 100%;
  }
`;

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 109px;
  border-left: 1px solid ${TRANSPARENT};
  padding: 0.3em 1em 0 1em;

  &:first-child {
    margin-left: 0;
    border: 0;
  }

  @media screen and (max-width: 424px) {
    min-width: 89px;
  }
`;

const Digits = styled.span`
  display: block;
  font-size: 4.35em;
  margin: 0 auto;
  line-height: 0.85em;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 424px) {
    font-size: 2.65em;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 3.65em;
  }
`;

const Unit = styled.strong`
  display: block;
  font-size: 16px;
  padding: 0.45em 0.2em 0;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  letter-spacing: 5px;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1em;
    letter-spacing: 3px;
  }
`;

export default function CountDown() {
  const targetDate = new Date(2020, 7, 14, 18, 0, 0);

  const timeleft = useLiveCountDown(targetDate);

  return (
    <CountDownContainer>
      <Counter>
        <Digits>{formatDigits(timeleft.days)}</Digits>
        <Unit>
          <FormattedMessage id="countdown.days" defaultMessage="DAYS" />
        </Unit>
      </Counter>
      <Counter>
        <Digits>{formatDigits(timeleft.hours)}</Digits>
        <Unit>
          <FormattedMessage id="countdown.hours" defaultMessage="HRS" />
        </Unit>
      </Counter>
      <Counter>
        <Digits>{formatDigits(timeleft.minutes)}</Digits>
        <Unit>
          <FormattedMessage id="countdown.minutes" defaultMessage="MIN" />
        </Unit>
      </Counter>
      <Counter>
        <Digits>{formatDigits(timeleft.seconds)}</Digits>
        <Unit>
          <FormattedMessage id="countdown.seconds" defaultMessage="SEC" />
        </Unit>
      </Counter>
    </CountDownContainer>
  );
}
