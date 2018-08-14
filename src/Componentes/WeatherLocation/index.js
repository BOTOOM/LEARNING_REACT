import React, { Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import './styles.css';

import {CLOUDY,
    /*CLOUD, SUN,
    SNOW, RAIN,
    WINDY*/} from './../../constantes/weather';


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
      console.log("constructor");
    }



    handleUpdateClick = () =>{
      fetch(api_weather).then( data => {
      //  console.log(data);
        return data.json();
      }).then( weather_data => {
        const data = transformWeather(weather_data);
        this.setState({ data })
      //  console.log(weather_data);
      });
    //  console.log("actualizar");
    }

    componentWillMount() {
      this.handleUpdateClick();
    }
/*
    componentDidMount() {
      console.log("componentDidMount");
    }

    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
      console.log("componentDidUpdate");
    }
*/
    render = () => {
      console.log("render");
      const { city , data } = this.state;
      return(
        <div className= 'weatherLocationCont'>
        <Location city={city}/>
        {data ? <WeatherData data={data} /> : "Cargando..."}
        </div>
      );
    };

}

export default WeatherLocation;
