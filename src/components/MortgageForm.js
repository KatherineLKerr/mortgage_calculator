import React, {Component} from 'react';

class MortgageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary1: 0,
      salary2: 0
    }
    this.handleSalary1Change = this.handleSalary1Change.bind(this);
    this.handleSalary2Change = this.handleSalary2Change.bind(this);
  }

  handleSalary1Change(event) {
    this.setState({salary1: event.target.value});
  }

  handleSalary2Change(event) {
    this.setState({salary2: event.target.value});
  }


  render() {
    return (
      <form className="mortgage-form">
        <label for="salary1">Salary 1:</label>
        <input id="salary1" type="number" value={this.state.salary1} onChange={this.handleSalary1Change}></input>
        <label for="salary2">Salary 2:</label>
        <input id="salary2" type="number" value={this.state.salary2} onChange={this.handleSalary2Change}></input>
        <input type="submit" value="Calculate Mortgage"></input>
      </form>
    )
  }
}

export default MortgageForm;
