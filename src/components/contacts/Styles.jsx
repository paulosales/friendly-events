import styled from 'styled-components';
import { SECONDARY, TRANSPARENT, PRIMARY } from '../theme';

export const ContactContainer = styled.section`
  color: ${PRIMARY};
  background-color: ${SECONDARY};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactHeader = styled.div`
  width: 970px;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
`;

export const SocialNetworks = styled.div``;

export const ContactTitle = styled.h2`
  font-size: 3.5em;
  font-weight: 700;
  line-height: 1.5em;
  text-transform: uppercase;
`;

export const SocialNetworkIcon = styled.i`
  background-color: ${TRANSPARENT};
  color: ${PRIMARY};
  font-size: 1.65em;
  line-height: 2.35em;
  width: 2.35em;
  height: 2.35em;
  border-radius: 50%;
  text-align: center;
`;

export const MessageForm = styled.form`
  width: 970px;
`;

export const InputForm = styled.input`
  border: 3px solid ${PRIMARY};
  height: 2.35em;
  font-size: 2em;
  width: 100%;
`;

export const MessageText = styled.textarea`
  width: 100%;
  height: 200px;
  font-size: 2em;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: center;
`;
