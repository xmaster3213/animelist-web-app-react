import '../css/Home.css';
import Logged from './Logged';
import Anime from './Anime';

class Home extends Logged {

  componentDidMount() {
    const cards = this._request.get('http://localhost:8081/api/anime/');
    cards.then(data => {
      this.setState({data});
    }, (error) => console.log(error));
  }

  _renderBody() {
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
      cards.map(card => this.#createCard(card.id, card.nome, card.immagine_copertina))
    );
  }

  #createCard(id, name, image) {
    return (
      <div key={id} className='Home-card' onClick={() => this.props.redirect(<Anime redirect={this.props.redirect} id={id} />)}>
        <img src={image} alt='Anime cover'></img>
        <span className='Home-card-name'>{name}</span>
      </div>
    );
  }
}

export default Home;