import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtra = ({humidity, wind}) => (
  <div className = 'weatherExtraCont'>
    <span className = 'extraText'>{`humedad: ${humidity} %`} </span>
    <span className = 'extraText'> {`Vientos: ${wind} `}</span>
  </div>
);

WeatherExtra.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtra;
