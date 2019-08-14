import React, {Component} from 'react';
import MortgageDisplay from '../components/MortgageDisplay';
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
      mortgageTerm: 0,
      mortgage: 0,
      monthlyRepayments: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.calculateMortgage = this.calculateMortgage.bind(this);
  }

  calculateMortgage() {
    const mortgage = ((parseInt(this.state.salary1) + parseInt(this.state.salary2)) * 3) -
    parseInt(this.state.monthlyCommitments) + parseInt(this.state.deposit)

    const totalRepayment = mortgage + (mortgage / parseInt(this.state.interestRate));
    const monthlyRepayments = totalRepayment / (parseInt(this.state.mortgageTerm) * 12)

    if (monthlyRepayments !== this.state.monthlyRepayments) {
      this.setState({mortgage: mortgage});
      this.setState({monthlyRepayments: monthlyRepayments});
    }
  }

  handleFormSubmit({salary1, salary2, deposit, monthlyCommitments, interestRate, mortgageTerm}) {
    this.setState({ salary1: salary1, salary2: salary2,
                  deposit: deposit, monthlyCommitments: monthlyCommitments,
                  interestRate: interestRate, mortgageTerm: mortgageTerm});
  }

  componentDidUpdate() {
    this.calculateMortgage();
  }



  render() {
    return(
      <div className="components">
        <MortgageForm onFormSubmit={this.handleFormSubmit}/>
        <MortgageDisplay mortgage={this.state.mortgage} monthlyRepayments={this.state.monthlyRepayments} />
      </div>
    )
  }
}

export default MortgageContainer;
