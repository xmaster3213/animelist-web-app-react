import '../css/Home.css';
import React from 'react';

class Home extends React.Component {

#request;

  constructor(props) {
    super(props);
    this.#request = require('../functions/functionalities');
  }

  render() {
    return (
      <div className='Home'>
        <h1>Animelist</h1>
        <div className='Home-cards-container'>
          {this.#createCards()}
        </div>
      </div>
    );
  }

  #createCards() {
    const cards = this.#request.get('http://localhost:8081/api/anime/');
    return (
      cards.map(card => this.#createCard(card.nome, card.immagine_copertina))
    );
  }

  #createCard(name, image) {
    return (
      <div key={name} className='Home-card'>
        <img src={image} alt='Anime cover'></img>
        <span className='Home-card-name'>{name}</span>
      </div>
    );
  }
}

export default Home;