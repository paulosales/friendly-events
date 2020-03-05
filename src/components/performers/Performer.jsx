import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import {
  PerformerContainer,
  PerformerPhotoContainer,
  PerformerPhoto,
  PerformerName,
  PerformerCity,
  PerformerCityIcon,
} from './Styles';

const Performer = function(props) {
  const { performer } = props;
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <PerformerContainer onClick={toggleFullScreen} fullScreen={fullScreen}>
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
    </PerformerContainer>
  );
};

Performer.propTypes = {
  performer: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
  }),
};

export default Performer;
