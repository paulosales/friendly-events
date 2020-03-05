import React from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import {
  ContactContainer,
  SocialNetworks,
  SocialNetworkIcon,
  ContactHeader,
  ContactTitle,
  MessageForm,
  FormRow,
  InputForm,
  MessageText,
  SocialNetwork,
  SendMessageButton,
  FormFooter,
} from './Styles';
import ButtonIcon from '../buttons/ButtonIcon';

const PageFooter = function(props) {
  const { intl } = props;
  return (
    <ContactContainer id="contact">
      <ContactHeader>
        <ContactTitle>
          {intl.formatMessage({
            id: 'contact.questions',
            defaultMessage: 'Questions?',
          })}
        </ContactTitle>
        <SocialNetworks>
          <SocialNetwork
            target="_new"
            href="https://instagram.com/arrochaonoforro"
          >
            <SocialNetworkIcon className="fab fa-instagram" />
          </SocialNetwork>
          <SocialNetwork
            target="_new"
            href="https://api.whatsapp.com/send?phone=5585999603638&text="
          >
            <SocialNetworkIcon className="fab fa-whatsapp" />
          </SocialNetwork>
          <SocialNetwork target="_new" href="mailto:arrochaonoforro@gmail.com">
            <SocialNetworkIcon className="far fa-envelope" />
          </SocialNetwork>
        </SocialNetworks>
      </ContactHeader>
      <MessageForm>
        <FormRow>
          <InputForm
            type="text"
            placeholder={intl.formatMessage({
              id: 'contact.yourname',
              defaultMessage: 'Your Name',
            })}
            name="username"
          />
          <InputForm
            type="email"
            placeholder={intl.formatMessage({
              id: 'contact.youremail',
              defaultMessage: 'Your Email',
            })}
            name="useremail"
          />
          <InputForm
            type="phone"
            placeholder={intl.formatMessage({
              id: 'contact.yourphone',
              defaultMessage: 'Your Phone',
            })}
            name="userphone"
          />
        </FormRow>
        <FormRow>
          <MessageText name="usermessage" rows="20" cols="80"></MessageText>
        </FormRow>
        <FormFooter>
          <SendMessageButton>
            <ButtonIcon className="fas fa-paper-plane" />
            Send Message
          </SendMessageButton>
        </FormFooter>
      </MessageForm>
    </ContactContainer>
  );
};

PageFooter.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(PageFooter);
