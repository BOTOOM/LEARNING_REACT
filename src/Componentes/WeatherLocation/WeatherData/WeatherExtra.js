import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtra = ({humedad, viento}) => (
  <div>
    <span>{`${humedad} % | `} </span>
    <span> {`${viento} wind`}</span>
  </div>
);

WeatherExtra.propTypes = {
  humedad: PropTypes.number.isRequired,
  viento: PropTypes.string.isRequired,
};

export default WeatherExtra;
