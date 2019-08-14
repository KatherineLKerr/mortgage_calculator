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
      monthlyCommitments: 0,
      interestRate: 0,
      mortgageTerm: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit({salary1, salary2, deposit, monthlyCommitments, interestRate, mortgageTerm}) {
    this.setState({ salary1: salary1, salary2: salary2,
                  deposit: deposit, monthlyCommitments: monthlyCommitments,
                  interestRate: interestRate, mortgageTerm: mortgageTerm});
  }

  render() {
    return(
      <div>
        <p>Enter Details Here:</p>
        <MortgageForm onFormSubmit={this.handleFormSubmit}/>
        <AllowedMortgage salary1={this.state.salary1} salary2={this.state.salary2}
        deposit={this.state.deposit} monthlyCommitments={this.state.monthlyCommitments}
        interestRate={this.state.interestRate} mortgageTerm={this.state.mortgageTerm}/>
      </div>
    )
  }
}

export default MortgageContainer;
