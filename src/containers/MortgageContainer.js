import React, {Component} from 'react';
import AllowedMortgage from '../components/AllowedMortgage';
import MortgageForm from '../components/MortgageForm';

class MortgageContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mortgage1: 0,
      mortgage2: 0
    }
  }

  render() {
    return(
      <div>
        <p>mortgage container </p>
        <AllowedMortgage mortgage1={this.state.mortgage1} mortgage2={this.state.mortgage2}/>
        <p>mortgage form</p>
        <MortgageForm />
      </div>
    )
  }



}

export default MortgageContainer;
