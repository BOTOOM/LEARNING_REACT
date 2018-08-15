import React, { Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather'
import './styles.css';



const location ="Bogota, CO";
const api_key = "e3b4631cea0510d6eb068127ffbc6c84";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`;


class WeatherLocation extends Component{

  constructor() {
    super();
    this.state = {
      data: null,
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
        {data ? <WeatherData data={data} /> :
        <CircularProgress size={60} thickness={7} />}
        </div>
      );
    };

}

export default WeatherLocation;
