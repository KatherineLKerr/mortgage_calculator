import React, { Component } from 'react';
import MortgageDisplay from './MortgageDisplay'
class AllowedMortgage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monthlyRepayments: 0
    }
  }

  render() {
    return(
      <div>
        
        <MortgageDisplay/>
      </div>
    )
  }
}
export default AllowedMortgage;
