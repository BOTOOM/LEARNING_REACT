import React from 'react';
import PropTypes from 'prop-types';
import WeatherTempe from './WeatherTempe';
import WeatherExtra from './WeatherExtra';

import './styles.css'

const WeatherData = ({data}) => {
  const {temperature, weatherState, humidity, wind} = data;
  return (
  <div className ='weatherDataCont' >
    <WeatherTempe temperature={temperature} weatherState={weatherState} />
    <WeatherExtra humidity={humidity} wind={wind} />
  </div>);
};

WeatherData.propTypes = {
  data: PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      weatherState: PropTypes.string.isRequired,
      humidity : PropTypes.number.isRequired,
      wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;
