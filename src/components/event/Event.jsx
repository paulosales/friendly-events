import React from 'react';
import {
  EventContainer,
  EventCard,
  EventCardTitle,
  EventCardDetail,
  EventCardIcon,
  ButtonGetDirections,
  EventCards,
} from './Styles';
import { PRIMARY, SECONDARY } from '../theme';
import { FormattedMessage } from 'react-intl';
import ButtonIcon from '../buttons/ButtonIcon';

export default function Event() {
  return (
    <EventContainer id="events">
      <EventCards>
        <EventCard borderColor={PRIMARY}>
          <EventCardIcon className="fa fa-calendar-alt" />
          <EventCardTitle>
            <FormattedMessage
              id="event.date.time"
              defaultMessage="Event Date & Time"
            />
          </EventCardTitle>
          <EventCardDetail>
            <FormattedMessage
              id="event.date.value"
              defaultMessage="August, 14th, 15th and, 16th"
            />
          </EventCardDetail>
        </EventCard>
        <EventCard borderColor={SECONDARY}>
          <EventCardIcon className="fa fa-map-marker-alt" />
          <EventCardTitle>
            <FormattedMessage
              id="event.location"
              defaultMessage="Event Location"
            />
          </EventCardTitle>
          <EventCardDetail>
            Rua José Roberto Sales, 44,
            <br />
            Barra do Ceará, Fortaleza-Ceará
          </EventCardDetail>
        </EventCard>
      </EventCards>
      <ButtonGetDirections href="#map">
        <ButtonIcon className="fas fa-arrow-circle-right" />
        <FormattedMessage
          id="event.get.directions"
          defaultMessage="Get directions"
        />
      </ButtonGetDirections>
    </EventContainer>
  );
}
