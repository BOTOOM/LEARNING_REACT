import React from 'react';
import PropTypes from 'prop-types';
import WeatherTempe from './WeatherTempe';
import WeatherExtra from './WeatherExtra';

import './styles.css'

const WeatherData = ({data}) => {
  const {temperatura, estado, humedad, viento} = data;
  return (
  <div className ='weatherDataCont' >
    <WeatherTempe temperatura={temperatura} estado={estado} />
    <WeatherExtra humedad={humedad} viento={viento} />
  </div>);
};

WeatherData.propTypes = {
  data: PropTypes.shape({
      temperatura: PropTypes.number.isRequired,
      estado: PropTypes.string.isRequired,
      humedad : PropTypes.number.isRequired,
      viento: PropTypes.string.isRequired,
  }),
};

export default WeatherData;
