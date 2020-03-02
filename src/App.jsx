import React from 'react';

import 'bootstrap3/dist/css/bootstrap.css'

import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import CountDown from './components/countdown/CountDown';
import JoinEventButton from './components/buttons/JoinEventButton';
import CarouselFooter from './components/carousel/CarouselFooter';
import Event from './components/event/Event';
import Performers from './components/performers/Performers';
import Map from './components/map/Map'

function App() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <CarouselFooter>
        <CountDown/>
        <JoinEventButton/>
      </CarouselFooter>
      <Event/>
      <Performers/>
      <Map lat={-3.7001245} lng={-38.5739555} height="500px"
        markerText="Açai Na Taipa, Rua José Roberto Sáles, 44, Barra do Ceará" zoom={15}/>
    </div>
  );
}

export default App;
