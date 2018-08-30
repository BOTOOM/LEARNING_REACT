import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => {
  return (<div>
    <WeatherLocation city={'Bogota, CO'} />
    <WeatherLocation city={'Buenos Aires, AR'} />
    <WeatherLocation city={'Santiago, CL'} />
  </div>
);
};

export default LocationList;
