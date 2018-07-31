import React from 'react';
import WeatherTempe from './WeatherTempe';
import WeatherExtra from './WeatherExtra';
import {CLOUD,
    CLOUDY, SUN,
    RAIN, SNOW,
    WINDY} from './../../../constantes/weather';
import './styles.css'

const WeatherData = () => (
  <div className ='weatherDataCont' >
    <WeatherTempe temperatura={20} estado={CLOUDY} />
    <WeatherExtra humedad={80} viento={'10 m/s'} />
  </div>
);

export default WeatherData;
