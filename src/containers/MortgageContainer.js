import React, {Component} from 'react';

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
      </div>
    )
  }



}

export default MortgageContainer;
