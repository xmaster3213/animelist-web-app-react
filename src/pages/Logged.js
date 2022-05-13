import '../css/Logged.css';
import Default from './Default';
import Home from './Home'
import Login from './Login'


// @Generic
class Logged extends Default {

  constructor(props) {
    if (!sessionStorage.getItem('user')) {
      props.redirect(<Login redirect={props.redirect} />);
    } 
    super(props);
    this._request = require('../functions/functionalities');
  }

  _renderData() {
    return (
      <div className='Logged-page'>
        {this._renderNavBar()}
        {this._renderBody()}
      </div>
    );
  }

  _renderNavBar() {
    return (
      <div className='Logged-navbar'>
        <div className='Logged-navbar-content'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt='Site logo' onClick={() => this.props.redirect(<Home redirect = {this.props.redirect} />)} ></img>
          <h2>Search bar..</h2>
          <div className='Logged-navbar-user'>
            <img src={require('./test.jpg')} alt='Profile'></img>
            <div className='Logged-navbar-dropdow'>
              <div className='Logged-navbar-dropdow-content'>
                <div className='Logged-navbar-dropdown-content-element' onClick={() => this.props.redirect('PROFILE')}>
                  <span>Profile</span>
                </div>
                <div className='Logged-navbar-dropdown-content-element' onClick={() => this.props.redirect('ANIMELIST')}>
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
  _renderBody() {
    throw new Error('This method is not yet implemented');
  }

  #logout() {
    sessionStorage.removeItem('user');
    this.props.redirect(<Login redirect={this.props.redirect} />);
  }


}

export default Logged;