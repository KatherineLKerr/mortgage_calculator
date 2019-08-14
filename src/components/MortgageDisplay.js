import React from 'react';

const MortgageDisplay = (props) =>
  <div className='mortgage-display'>
    <h3>Your Mortgage:</h3>
    <p>{props.mortgage}</p>
    <h3>Repayments:</h3>
    <p>{props.monthlyRepayments}</p>
  </div>

 export default MortgageDisplay;
