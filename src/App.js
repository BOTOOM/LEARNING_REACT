import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './Componentes/LocationList'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (
      <MuiThemeProvider>
        <Grid fluid>
          <Row>
            Titulo
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <LocationList
              cities= {cities}
              onSelectedLocation= {this.handleSelectedLocation} >
            </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <div className="detaiils">
              </div>
            </Col>
          </Row>
        </Grid>
    </MuiThemeProvider>
    );
  }
}



export default App;
