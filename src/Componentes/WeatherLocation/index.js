import React, { Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUDY, RAIN,
    /*CLOUD, SUN,
    SNOW,
    WINDY*/} from './../../constantes/weather';
import './styles.css';

const data1 = {
  temperatura: 20,
  estado: CLOUDY,
  humedad: 10,
  viento: '10 m/s',
};

const data2 = {
  temperatura: 18,
  estado: RAIN,
  humedad: 22,
  viento: '19 m/s',
};

class WeatherLocation extends Component{

    constructor() {
      super();
      this.state = {
        data: data1,
        city: 'Buenos Aires',
      };
    }

    handleUpdateClick = () =>{
      this.setState({
        data: data2,
      });
      console.log("actualizar");
    }


    render = () => {
      const { city , data } = this.state;
      return(
        <div className= 'weatherLocationCont'>
          <Location city={city}/>
          <WeatherData data={data} />
          <button onClick={this.handleUpdateClick}>Actualizar </button>
        </div>
      );
    };

}

export default WeatherLocation;
