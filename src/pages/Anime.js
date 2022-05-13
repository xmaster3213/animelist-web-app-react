import '../css/Anime.css';
import Logged from './Logged';

class Anime extends Logged {

  componentDidMount() {
    const resPromise = this._request.get('http://localhost:8081/api/anime/' + this.props.id);
    resPromise.then((res) => {
      if (res.status === 200) {
        res.data.then(data => {
          this.setState({
            'data': {
              'anime': data
            },
            'navtab': 0
          });
        }, (error) => console.log(error));

      }
    });
  }

  _renderBody() {
    return (
      <div className='Anime-container'> 
        <div className='Anime-container-header'>
          <div className='Anime-container-header-cover_wrapper'>
            <img src={this.state.data.anime.immagine_copertina} alt='Anime cover'></img>
            <button className='Anime-container-header-cover_weapper-button' onClick={this.#addAnimeToList()}>Plan to Watch</button>
          </div>
          <div className='Anime-container-header-content'>
            <h1 className='Anime-container-header-content-title'>{this.state.data.anime.nome}</h1>
            <p className='Anime-container-header-content-description'>{this.state.data.anime.trama}</p>
          </div>
        </div>
        <div className='Anime-container-body'>
          <ul className='Anime-container-body-navtabs'>
            <li className={this.#checkSelectedNavtab(0)} onClick={() => this.setState({'navtab': 0})}>INFOS</li>
            <li className={this.#checkSelectedNavtab(1)} onClick={() => this.setState({'navtab': 1})}>CHARACTERS</li>
            <li className={this.#checkSelectedNavtab(2)} onClick={() => this.setState({'navtab': 2})}>EPISODED</li>
          </ul>
          <div className='Anime-container-body-content'>
            {this.#getCurrentTabContent()}
          </div>
        </div>
      </div>
    );
  }

  #addAnimeToList() {
    // TODO: create add anime to list form or go to page with the form
  }

  #checkSelectedNavtab(navtab) {
    if(this.state.navtab === navtab) {
      return 'Anime-container-body-navtabs-item anime-container-body-navbar-item-selected';
    } else {
      return 'Anime-container-body-navtabs-item';
    } 
  }

  #getCurrentTabContent() {
    if (this.state.navtab === 0) {
      return (
        <div className='Anime-container-body-content-infos_container'>
          <div className='Anime-container-body-content-infos_container-infos'>
            <div className='Anime-container-body-content-infos_container-infos-dataset'>
              <span>Studio</span>
              <span>{this.state.data.anime.studio}</span>
            </div>
            <div className='Anime-container-body-content-infos_container-infos-dataset'>
              <span>Episode Duration</span>
              <span>{this.state.data.anime.durata_episodi}</span>
            </div>
            <div className='Anime-container-body-content-infos_container-infos-dataset'>
              <span>Episodes</span>
              <span>{this.state.data.anime.numero_episodi}</span>
            </div>
            <div className='Anime-container-body-content-infos_container-infos-dataset'>
              <span>Start Date</span>
              <span>{this.state.data.anime.data_rilascio}</span>
            </div>
          </div>
          <div>
            <span>Trailer</span>
            <iframe title='Anime trailer' className='Anime-container-body-content-infos_container-trailer' src={this.state.data.anime.trailer} frameBorder='0' allowFullScreen='allowfullscreen'></iframe>
          </div>
        </div>
      );
    } else if (this.state.navtab === 1) {
      return <h1>1</h1>
    } else {
      return <h1>2</h1>
    }
  }

}

export default Anime;