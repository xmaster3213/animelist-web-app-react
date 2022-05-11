import '../css/Logged.css';
import Default from './Default';
import Home from './Home'

// @Generic
class Logged extends Default {

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
          <img src={process.env.PUBLIC_URL + '/logo.png'} onClick={() => this.props.redirect(<Home redirect = {this.props.redirect} />)} ></img>
          <h2>Search bar..</h2>
          <div className='Logged-navbar-user'>
            <img src={require('./test.jpg')}></img>
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
    // TODO: Logout from the session
    this.props.reference('LOGIN');
  }


}

export default Logged;