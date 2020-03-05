import React from 'react';
import styled from 'styled-components';
import { IntlProvider } from 'react-intl';

import 'bootstrap3/dist/css/bootstrap.css';

import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import CountDown from './components/countdown/CountDown';
import JoinEventButton from './components/buttons/JoinEventButton';
import CarouselFooter from './components/carousel/CarouselFooter';
import Event from './components/event/Event';
import Performers from './components/performers/Performers';
import Map from './components/map/Map';
import messages from './intl/messages.json';
import { addAppLocaleData } from './intl/addlocales';
import IntlContext from './intl/intl-context';
import Contact from './components/contacts/Contact';

import detectBrowserLanguage from 'detect-browser-language';
import { useState } from 'react';

addAppLocaleData();

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [language, setLanguage] = useState(detectBrowserLanguage());

  return (
    <IntlContext.Provider value={{ language, setLanguage }}>
      <IntlProvider locale={language} messages={messages[language]}>
        <AppContainer>
          <Header />
          <Carousel />
          <CarouselFooter>
            <CountDown />
            <JoinEventButton />
          </CarouselFooter>
          <Event />
          <Contact />
          <Performers />
          <Map
            lat={-3.7001245}
            lng={-38.5739555}
            height="500px"
            markerText="Açai Na Taipa, Rua José Roberto Sáles, 44, Barra do Ceará"
            zoom={15}
          />
        </AppContainer>
      </IntlProvider>
    </IntlContext.Provider>
  );
}

export default App;
