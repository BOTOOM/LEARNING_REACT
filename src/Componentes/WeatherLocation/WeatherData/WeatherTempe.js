import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,
    CLOUDY, SUN,
    RAIN, SNOW,
    WINDY} from './../../../constantes/weather';
import './styles.css';
const stateToiconName = (estado) => {
  switch (estado) {
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
    default:
      return "day-sunny";
  }
}

const getWeatherIcon = (estado) =>{
  return   (<WeatherIcons className='wIcon' name={stateToiconName(estado)} size="4x"/>);
}
const WeatherTempe = ({temperatura, estado}) => (
  <div className= 'weatherTempeCont'>
    {getWeatherIcon(estado)}
    <span className = 'temperatura'>{`${temperatura} `}</span>
    <span className= 'medidaTempe' >°C</span>
  </div>
);

WeatherTempe.propTypes = {
  temperatura: PropTypes.number.isRequired,
  estado : PropTypes.string,
};

export default WeatherTempe;
