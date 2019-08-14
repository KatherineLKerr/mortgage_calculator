import React from 'react';

const MortgageDisplay = (props) =>
  <div>
    <h2>Your Mortgage:</h2>
    <p>{props.mortgage}</p>
    <h2>Repayments:</h2>
    <p>{props.monthlyRepayments}</p>
  </div>

 export default MortgageDisplay;
