import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
            <AppBar position="sticky" >
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
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
    );
  }
}



export default App;
