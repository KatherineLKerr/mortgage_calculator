import React, {Component} from 'react';

class MortgageForm extends Component {
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
    this.handleSalary1Change = this.handleSalary1Change.bind(this);
    this.handleSalary2Change = this.handleSalary2Change.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);
    this.handleMonthlyCommitmentChange = this.handleMonthlyCommitmentChange.bind(this);
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
    this.handleMortgageTermChange = this.handleMortgageTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSalary1Change(event) {
    this.setState({salary1: event.target.value});
  }

  handleSalary2Change(event) {
    this.setState({salary2: event.target.value});
  }

  handleDepositChange(event) {
    this.setState({deposit: event.target.value})
  }

  handleMonthlyCommitmentChange(event) {
    this.setState({monthlyCommitments: event.target.value})
  }

  handleInterestRateChange(event) {
    this.setState({interestRate: event.target.value})
  }

  handleMortgageTermChange(event) {
    this.setState({mortgageTerm: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit({ salary1: this.state.salary1, salary2: this.state.salary2,
                              deposit: this.state.deposit, monthlyCommitments: this.state.monthlyCommitments,
                              interestRate: this.state.interestRate, mortgageTerm: this.state.mortgageTerm
                            });
  }

  render() {
    return (
      <form className="mortgage-form" onSubmit={this.handleSubmit}>
        <label for="salary1">Salary 1:</label>
        <input id="salary1" type="number" value={this.state.salary1} onChange={this.handleSalary1Change}></input>
        <label for="salary2">Salary 2:</label>
        <input id="salary2" type="number" value={this.state.salary2} onChange={this.handleSalary2Change}></input>
        <label for="deposit">Deposit Amount:</label>
        <input id="deposit" type="number" value={this.state.deposit} onChange={this.handleDepositChange}></input>
        <label for="monthly-commitments">Monthly Commitments:</label>
        <input id="monthly-commitments" type="number" value={this.state.monthlyCommitments} onChange={this.handleMonthlyCommitmentChange}></input>
        <label for="interest-rate">Interest Rate:</label>
        <input id="interest-rate" type="number" value={this.state.interestRate} onChange={this.handleInterestRateChange}></input>
        <label for="mortgage-term">Mortgage Term:</label>
        <input id="mortgage-term" type="number" value={this.state.mortgageTerm} onChange={this.handleMortgageTermChange}></input>

        <input type="submit" value="Calculate Mortgage"></input>
      </form>
    )
  }
}

export default MortgageForm;
