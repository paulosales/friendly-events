import React from 'react';
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
} from './Styles';
import { FormattedMessage } from 'react-intl';

export default function PageFooter() {
  return (
    <ContactContainer id="contact">
      <ContactHeader>
        <ContactTitle>
          <FormattedMessage
            id="contact.questions"
            defaultMessage="Questions?"
          />
        </ContactTitle>
        <SocialNetworks>
          <a target="_new" href="https://instagram.com/arrochaonoforro">
            <SocialNetworkIcon className="fab fa-instagram" />
          </a>
          <a
            target="_new"
            href="https://api.whatsapp.com/send?phone=5585999603638&text="
          >
            <SocialNetworkIcon className="fab fa-whatsapp" />
          </a>
          <a target="_new" href="mailto:arrochaonoforro@gmail.com">
            <SocialNetworkIcon className="far fa-envelope" />
          </a>
        </SocialNetworks>
      </ContactHeader>
      <MessageForm>
        <FormRow>
          <InputForm type="text" placeholder="You Name" name="username" />
          <InputForm type="email" placeholder="You Email" name="useremail" />
          <InputForm type="phone" placeholder="You Email" name="userphone" />
        </FormRow>
        <FormRow>
          <MessageText name="usermessage" rows="20" cols="80"></MessageText>
        </FormRow>
        <FormRow>
          <button>
            <i className="fas fa-paper-plane" />
            Send Message
          </button>
        </FormRow>
      </MessageForm>
    </ContactContainer>
  );
}
