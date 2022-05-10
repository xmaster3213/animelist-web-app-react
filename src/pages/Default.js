import '../css/Default.css';
import React from 'react';

class Default extends React.Component {

_request;
state = {
  data: null,
};

  constructor(props) {
    super(props);
    this._request = require('../functions/functionalities');
  }

  render() {
    if (this.state.data === null) {
      return <h2>Loading...</h2>
    } else {
      return this._renderData();
    }
  }

  // @Abstract
  _renderData() {
    throw new Error('This method is not yet implemented');
  }

  


}

export default Default;