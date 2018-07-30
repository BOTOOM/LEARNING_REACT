import React from 'react';
import WeatherTempe from './WeatherTempe';
import WeatherExtra from './WeatherExtra';
import {CLOUD,
    CLOUDY, SUN,
    RAIN, SNOW,
    WINDY} from './../../../constantes/weather';


const WeatherData = () => (
  <div>
    <WeatherTempe temperatura={20} estado={RAIN} />
    <WeatherExtra humedad={80} viento={'10 m/s'} />
  </div>
);

export default WeatherData;
