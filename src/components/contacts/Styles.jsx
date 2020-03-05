import styled from 'styled-components';
import { SECONDARY, TRANSPARENT, PRIMARY, GRAY, WHITE } from '../theme';

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
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 980px) {
    width: 768px;
    flex-direction: column;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    width: 650px;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 3.5em;
  font-weight: 700;
  line-height: 1.5em;
  text-transform: uppercase;
`;

export const SocialNetworks = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
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

export const SocialNetwork = styled.a``;

export const MessageForm = styled.form`
  width: 970px;

  @media screen and (max-width: 980px) {
    width: 768px;
  }

  @media screen and (max-width: 768px) {
    width: 650px;
  }

  @media screen and (max-width: 655px) {
    width: 95%;
  }
`;

export const InputForm = styled.input`
  border: 3px solid ${PRIMARY};
  height: 2.35em;
  width: 320px;
  font-size: 2em;
  padding-left: 5px;

  @media screen and (max-width: 980px) {
    margin-bottom: 5px;
    width: 100%;
  }
`;

export const MessageText = styled.textarea`
  border: 3px solid ${PRIMARY};
  width: 100%;
  height: 200px;
  font-size: 2em;
  padding-left: 5px;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SendMessageButton = styled.a`
  background-color: ${GRAY};
  color: ${WHITE};
  text-align: center;
  font-size: 2em;
  padding: 5px;
  word-wrap: none;
  width: 350px;

  &:visited,
  &:active,
  &:focus {
    color: ${WHITE};
    text-decoration: none;
  }

  &:hover {
    background-color: ${PRIMARY};
    color: ${WHITE};
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
