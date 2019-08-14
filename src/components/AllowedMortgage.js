import React, { Component } from 'react';

const AllowedMortgage = ( props ) => {

  return (
    <div>Mortgage allowed component
     <h2>{props.deposit}</h2>
     <h2>{props.monthlyCommitments}</h2>
     <p>{((parseInt(props.salary1) + parseInt(props.salary2)) * 3) -
                parseInt(props.monthlyCommitments) + parseInt(props.deposit)}</p>
    </div>
  )
}
export default AllowedMortgage;
