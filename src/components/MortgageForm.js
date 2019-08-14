import React, {Component} from 'react';

class MortgageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salary1: 0,
      salary2: 0
    }
  }

  render() {
    return (
      <form className="mortgage-form">
        <input type="number" value={this.state.salary1}></input>
        <input type="number" value={this.state.salary2}></input>
        <input type="submit" value="Calculate Mortgage"></input>
      </form>
    )
  }
}

export default MortgageForm;
