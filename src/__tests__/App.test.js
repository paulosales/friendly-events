import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import App from '../App';
import messages from '../intl/messages.json'

test('renders learn react link', () => {
  const { getAllByText } = render(
    <IntlProvider locale={"pt-BR"} messages={messages["pt-BR"]}>
      <App />
    </IntlProvider>
  );
  const eletronicText = getAllByText(/Professores/i);
  expect(eletronicText[0]).toBeInTheDocument();
});
