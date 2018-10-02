import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
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
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (
        <Grid fluid>

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
    );
  }
}



export default App;
