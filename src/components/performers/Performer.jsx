import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import {
  PerformerContainer,
  PerformerPhotoContainer,
  PerformerPhoto,
  PerformerName,
  PerformerCity,
  PerformerResume,
  ResumeInstagram,
  PerformerIcon,
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
        <PerformerIcon className="fa fa-map-marker" />
        <FormattedMessage
          id="performers.from"
          values={{ city: performer.city }}
          defaultMessage={`From {city}`}
        />
      </PerformerCity>
      {performer.instagrams.map(instagram => (
        <ResumeInstagram
          key={instagram}
          href={`https://www.instagram.com/${instagram}`}
          target="_blank"
        >
          <PerformerIcon className="fab fa-instagram" />
          {instagram}
        </ResumeInstagram>
      ))}
      <PerformerResume visible={fullScreen}>{performer.resume}</PerformerResume>
    </PerformerContainer>
  );
};

Performer.propTypes = {
  performer: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    city: PropTypes.string,
    resume: PropTypes.string,
    instagrams: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Performer;
