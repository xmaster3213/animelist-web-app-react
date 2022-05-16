import '../css/Logged.css';
import Default from './Default';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Animelist from './Animelist';


// @Generic
class Logged extends Default {

  constructor(props) {
    // Check if logged
    if (!sessionStorage.getItem('token')) {
      props.redirect(<Login redirect={props.redirect} />);
    } else {
      super(props);
      this._request = require('../functions/functionalities');
    }
  }

  componentDidMount() {
    const resPromise = this.requestGet('http://localhost:8081/api/user/' + JSON.parse(sessionStorage.getItem('user')).username, sessionStorage.getItem('token'));
    resPromise.then((res) => {
      if (res.ok) {
        res.data.then(data => {
          sessionStorage.setItem('user', JSON.stringify(data));
        }, (error) => console.log(error));
      }
    });
    this._componetDidMountContinue();
  }

  requestGet(url, token = null) {
    const response = this._request.get(url, token);
    return this.#request(response);
  }

  requestDel(url, token = null) {
    const response = this._request.del(url, token);
    return this.#request(response);
  }

  requestPost(url, data, token = null) {
    const response = this._request.post(url, data, token);
    return this.#request(response);
  }

  requestPut(url, data, token = null) {
    const response = this._request.put(url, data, token);
    return this.#request(response);
  }

  _renderData() {
    return (
      <div className='Logged-page'>
        {this._renderNavBar()}
        {this._renderBody()}
      </div>
    );
  }

  // Render navbar
  _renderNavBar() {
    return (
      <div className='Logged-navbar'>
        <div className='Logged-navbar-content'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt='Site logo' onClick={() => this.props.redirect(<Home redirect = {this.props.redirect} />)} ></img>
          {/* TODO: Implement search bar */}
          <h2>Search bar..</h2>
          <div className='Logged-navbar-user'>
            <img src={JSON.parse(sessionStorage.getItem('user')).immagine} alt='Profile'></img>
            <div className='Logged-navbar-dropdow'>
              <div className='Logged-navbar-dropdow-content'>
                <div className='Logged-navbar-dropdown-content-element' onClick={() => this.props.redirect(<Profile redirect = {this.props.redirect} />)}>
                  <span>Profile</span>
                </div>
                <div className='Logged-navbar-dropdown-content-element' onClick={() => this.props.redirect(<Animelist redirect = {this.props.redirect} />)}>
                  <span>Animelist</span>
                </div>
                <div className='Logged-navbar-dropdown-content-element' onClick={() => this.#logout()}>
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // @Abstract
  // Render body
  _renderBody() {
    throw new Error('This method is not yet implemented');
  }

  // @Abstract
  // Call this instead of componentDidMount to recive user data every time the page mount
  // You can call componentDidMount if you prefer to user the user data saved inside the sessionStorage
  _componetDidMountContinue() {
    throw new Error('This method is not yet implemented');
  }

  #logout() {
    sessionStorage.clear();
    this.props.redirect(<Login redirect={this.props.redirect} />);
  }

  async #request(response) {
    response = await response;
    if (response.status === 401) {
      this.#logout();
      return response;
    } else {
      return response;
    }
  }


}

export default Logged;