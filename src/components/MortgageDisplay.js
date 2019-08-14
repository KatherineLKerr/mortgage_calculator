import React from 'react';

const MortgageDisplay = (props) =>
  <div className='mortgage-display'>
    <h3>Your Mortgage:</h3>
    <p>£{props.mortgage.toFixed(2)}</p>
    <h3>Monthly Repayments:</h3>
    <p>£{props.monthlyRepayments.toFixed(2)}</p>
  </div>

 export default MortgageDisplay;
