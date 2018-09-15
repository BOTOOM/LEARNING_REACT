import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherlocationClick = city => {
    console.log("handleWeatherlocationClick");
    onSelectedLocation(city);
  }
  const strToComponent = cities => (
    cities.map( (city) =>
    (
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick= { () => handleWeatherlocationClick(city) }/>) )
  );

  return (
      <div>
        { strToComponent(cities)}
      </div>
);
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelecttedLocation: PropTypes.func,
}

export default LocationList;
