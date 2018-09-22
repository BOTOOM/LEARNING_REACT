import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import './styles.css';



//const city ="Bogota, CO";
const api_key = "e3b4631cea0510d6eb068127ffbc6c84";
const url = "https://api.openweathermap.org/data/2.5/weather";


class WeatherLocation extends Component{

  constructor( { city } ) {
    super();
    this.state = {
      city,
      data: null,
    };
  }


    componentWillMount() {
      const { city } = this.state;
      const api_weather = `${url}?q=${city}&appid=${api_key}`;
      fetch(api_weather).then( data => {
        return data.json();
      }).then( weather_data => {
        const data = transformWeather(weather_data);
        this.setState({ data })
      });
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
      const {onWeatherLocationClick} = this.props;
      const { city , data } = this.state;
      return(
        <div className= 'weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city={city}/>
        {data ? <WeatherData data={data} /> :
        <CircularProgress size={60} thickness={7} />}
        </div>
      );
    };

}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
