import '../css/Home.css';
import React from 'react';

class Anime extends React.Component {

#request;
state = {
  cards: null,
}

  constructor(props) {
    super(props);
    this.#request = require('../functions/functionalities');
  }

  render() {
    return <h1>HELLO</h1>
  }

}

export default Anime;