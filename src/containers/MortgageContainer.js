import React, {Component} from 'react';
import AllowedMortgage from '../components/AllowedMortgage';
import MortgageForm from '../components/MortgageForm';

class MortgageContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      salary1: 0,
      salary2: 0
    }
  }

  render() {
    return(
      <div>
        <p>mortgage container </p>
        <AllowedMortgage salary1={this.state.salary1} salary2={this.state.salary2}/>
        <p>mortgage form</p>
        <MortgageForm />
      </div>
    )
  }



}

export default MortgageContainer;
