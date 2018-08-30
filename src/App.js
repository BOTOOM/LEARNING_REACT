import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './Componentes/LocationList'
import './App.css';

const cities = [
  'Bogota, COL',
  'Buenos Aires, AR',
  'Washington DC., US',
  'Mexico, MX',
  'Madrid, ES',
  'Santiago, CL',
];
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities= {cities} ></LocationList>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
