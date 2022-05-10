import '../css/Logged.css';
import Default from './Default';

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
          <img src={process.env.PUBLIC_URL + '/logo.png'} onClick={() => this.props.redirect('HOME')} ></img>
          <h2>Search bar..</h2>
          <div className='Logged-navbar-user'>
            <img src={require('./test.jpg')}></img>
            <div className='Logged-navbar-dropdow'>
              Profile
              Logout
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


}

export default Logged;