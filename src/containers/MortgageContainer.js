import React, {Component} from 'react';
import AllowedMortgage from '../components/AllowedMortgage';
import MortgageForm from '../components/MortgageForm';

class MortgageContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      salary1: 0,
      salary2: 0,
      deposit: 0,
      monthlyCommitments: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({salary1, salary2, deposit, monthlyCommitments}) {
    this.setState({ salary1: salary1, salary2: salary2,
                  deposit: deposit, monthlyCommitments: monthlyCommitments});
  }

  render() {
    return(
      <div>
        <p>mortgage container </p>
        <AllowedMortgage salary1={this.state.salary1} salary2={this.state.salary2}
                          deposit={this.state.deposit} monthlyCommitments={this.state.monthlyCommitments}/>
        <p>mortgage form</p>
        <MortgageForm onFormSubmit={this.handleFormSubmit}/>
      </div>
    )
  }

}

export default MortgageContainer;
