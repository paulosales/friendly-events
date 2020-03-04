import React from 'react';
import {
  PerformersContainer,
  PerformersTitle,
  PerformersContainerOverlay,
  Performer,
  PerformersContent,
  PerformerPhoto,
  PerformerName,
  PerformerCity,
  PerformerCityIcon,
  PerformerPhotoContainer,
} from './Styles';
import { FormattedMessage } from 'react-intl';

import performers from './performers-data';

export default function Performers() {
  return (
    <PerformersContainer id="performers">
      <PerformersContainerOverlay>
        <PerformersTitle>
          <FormattedMessage
            id="performers.title"
            defaultMessage="Event Performers"
          />
        </PerformersTitle>
        <PerformersContent>
          {performers.map(performer => (
            <Performer key={performer.name}>
              <PerformerPhotoContainer>
                <PerformerPhoto src={performer.photo} />
              </PerformerPhotoContainer>
              <PerformerName>{performer.name}</PerformerName>
              <PerformerCity>
                <PerformerCityIcon className="fa fa-map-marker" />
                <FormattedMessage
                  id="performers.from"
                  values={{ city: performer.city }}
                  defaultMessage={`From {city}`}
                />
              </PerformerCity>
            </Performer>
          ))}
        </PerformersContent>
      </PerformersContainerOverlay>
    </PerformersContainer>
  );
}
