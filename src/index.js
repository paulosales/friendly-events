import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import App from './App';
import * as serviceWorker from './serviceWorker';
import messages from './intl/messages.json';
import { addAppLocaleData } from './intl/addlocales';

import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css';

addAppLocaleData();

ReactDOM.render(
  <IntlProvider locale={"pt-BR"} messages={messages["pt-BR"]}>
    <App />
  </IntlProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
