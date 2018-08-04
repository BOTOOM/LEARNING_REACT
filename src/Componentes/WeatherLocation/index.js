import React, { Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {CLOUDY,
    /*CLOUD, SUN,
    SNOW, RAIN,
    WINDY*/} from './../../constantes/weather';
import './styles.css';

const location ="Bogota, CO";
const api_key = "e3b4631cea0510d6eb068127ffbc6c84";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;

const data1 = {
  temperature: 20,
  weatherState: CLOUDY,
  humidity: 10,
  wind: '10 m/s',
};

class WeatherLocation extends Component{

    constructor() {
      super();
      this.state = {
        data: data1,
        city: 'Bogotá',
      };
    }

    getWeatherState = (weather) => {
      return CLOUDY;
    }

    getData = (weather_data) =>{
      const {humidity , temp } = weather_data.main;
      const {speed} = weather_data.wind;
      const weatherState  = this.getWeatherState(this.weather);

      const data ={
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`,
      }

      return data;
    }

    handleUpdateClick = () =>{
      fetch(api_weather).then( data => {
      //  console.log(data);
        return data.json();
      }).then( weather_data => {
        const data = this.getData(weather_data);
        this.setState({ data })
      //  console.log(weather_data);
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
