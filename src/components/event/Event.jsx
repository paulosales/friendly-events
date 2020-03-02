import React from 'react'
import { EventContainer, EventCard, EventCardTitle, EventCardDetail, EventCardIcon, ButtonGetDirections } from './Styles'
import { PRIMARY, SECONDARY } from '../theme'
import { FormattedMessage } from 'react-intl'
import ButtonIcon from '../buttons/ButtonIcon'

export default function Event() {
  return (
    <EventContainer id="events">
      <EventCard borderColor={PRIMARY}>
        <EventCardIcon className="fa fa-calendar-alt"/>
        <EventCardTitle>
          <FormattedMessage id="event.date.time" defaultMessage="Event Date & Time"/>
        </EventCardTitle>
        <EventCardDetail>
          14, 15 e 16 de Agosto<br/>
        </EventCardDetail>
      </EventCard>
      <EventCard borderColor={SECONDARY}>
        <EventCardIcon className="fa fa-map-marker-alt"/>
        <EventCardTitle>
          <FormattedMessage id="event.location" defaultMessage="Event Location"/>
        </EventCardTitle>
        <EventCardDetail>
          Rua José Roberto Sales, 44,<br/>
          Barra do Ceará, Fortaleza-Ceará
        </EventCardDetail>
      </EventCard>
      <ButtonGetDirections href="#map">
        <ButtonIcon className="fas fa-arrow-circle-right"/>
        <FormattedMessage id="event.get.directions" defaultMessage="Get directions"/>
      </ButtonGetDirections>
    </EventContainer>
  )
}
