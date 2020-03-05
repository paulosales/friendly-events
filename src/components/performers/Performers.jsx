import React from 'react';
import {
  PerformersContainer,
  PerformersTitle,
  PerformersContainerOverlay,
  PerformersContent,
} from './Styles';
import { FormattedMessage } from 'react-intl';

import performers from './performers-data';
import Performer from './Performer';

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
            <Performer key={performer.name} performer={performer} />
          ))}
        </PerformersContent>
      </PerformersContainerOverlay>
    </PerformersContainer>
  );
}
