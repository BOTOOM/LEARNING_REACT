import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD,
    CLOUDY, SUN,
    RAIN, SNOW,
    WINDY} from './../../../constantes/weather';

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
  return   (<WeatherIcons name={stateToiconName(estado)} size="2x"/>);
}
const WeatherTempe = ({temperatura, estado}) => (
  <div>
    {getWeatherIcon(estado)}
    <span>{`${temperatura} °C`}</span>
  </div>
);

WeatherTempe.propTypes = {
  temperatura: PropTypes.number.isRequired,
  estado : PropTypes.string,
};

export default WeatherTempe;
