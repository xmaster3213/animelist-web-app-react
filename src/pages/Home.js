import '../css/Home.css';
import Default from './Default';

class Home extends Default {

  componentDidMount() {
    const cards = this._request.get('http://localhost:8081/api/anime/');
    cards.then(data => {
      this.setState({data});
    }, (error) => console.log(error));
  }

  _renderData() {
    return (
      <div className='Home'>
        <h1>Animelist</h1>
        <div className='Home-cards-container'>
          {this.#createCards(this.state.data)}
        </div>
      </div>
    );
  }

  #createCards(cards) {
    return (
      cards.map(card => this.#createCard(card.nome, card.immagine_copertina))
    );
  }

  #createCard(name, image) {
    return (
      <div key={name} className='Home-card' onClick={() => this.props.fun('ANIME')}>
        <img src={image} alt='Anime cover'></img>
        <span className='Home-card-name'>{name}</span>
      </div>
    );
  }
}

export default Home;