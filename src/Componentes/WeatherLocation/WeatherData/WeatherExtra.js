import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtra = ({humedad, viento}) => (
  <div className = 'weatherExtraCont'>
    <span className = 'extraText'>{`Humedad: ${humedad} %`} </span>
    <span className = 'extraText'> {`Vientos: ${viento} `}</span>
  </div>
);

WeatherExtra.propTypes = {
  humedad: PropTypes.number.isRequired,
  viento: PropTypes.string.isRequired,
};

export default WeatherExtra;
