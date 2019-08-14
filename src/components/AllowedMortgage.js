import React, { Component } from 'react';

const AllowedMortgage = ( props ) => {
  return (
    <div>Mortgage allowed component
     <h2>{props.mortgage1}</h2>
     <h2>{props.mortgage2}</h2>
    </div>
  )
}
export default AllowedMortgage;
