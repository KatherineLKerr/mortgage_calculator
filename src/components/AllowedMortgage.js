import React, { Component } from 'react';

const AllowedMortgage = ( props ) => {

  return (
    <div>Mortgage allowed component
     <h2>{props.salary2}</h2>
     <h2>{props.salary1}</h2>
     <p>{(props.salary1 + props.salary2) * 3}</p>
    </div>
  )
}
export default AllowedMortgage;
