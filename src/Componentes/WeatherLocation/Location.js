import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => {
  //const city = props.city;
//  const {city} = props; //destructuring
return (<div className = 'LocationCont'>
          <h1>
            {city}
          </h1>
        </div>);
};

Location.propTypes ={
  Location : PropTypes.string.isRequired,
};

export default Location;
