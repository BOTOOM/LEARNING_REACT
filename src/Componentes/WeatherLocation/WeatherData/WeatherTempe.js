import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,
    CLOUDY, SUN,
    RAIN, SNOW,
    WINDY, THUNDER,
    DRIZZLE} from './../../../constantes/weather';
import './styles.css';
const stateToiconName = (weatherState) => {
  switch (weatherState) {
    case CLOUD:
      return   "cloud";
    case CLOUDY:
      return   "cloudy";
    case SUN:
      return   "day-sunny";
    case RAIN:
      return   "rain";
    case SNOW:
      return   "snow";
    case WINDY:
      return   "windy";
    case THUNDER:
      return "day-thunderstorm";
    case DRIZZLE:
      return "day-showers"
    default:
      return "day-sunny";
  }
}

const getWeatherIcon = (weatherState) =>{
  return   (<WeatherIcons className='wIcon' name={stateToiconName(weatherState)} size="4x"/>);
}
const WeatherTempe = ({temperature, weatherState}) => (
  <div className= 'weatherTempeCont'>
    {getWeatherIcon(weatherState)}
    <span className = 'temperature'>{`${temperature} `}</span>
    <span className= 'medidaTempe' >°C</span>
  </div>
);

WeatherTempe.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState : PropTypes.string,
};

export default WeatherTempe;
