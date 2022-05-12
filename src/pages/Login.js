import Default from './Default';
import '../css/Login.css';

class Login extends Default {

  componentDidMount() {
    this.setState({
      'data': {
        'logged': false
      }
    });
  }

  _renderData() {
    return (
      <div className='Login-container'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt='Site Logo'></img>
        <form className='Login-container-form'>
          <div className='Login-container-form-input'>
            <label>Username</label>
            {/* TODO: fix ref="get input" */}
            <input ref={(value) => this.setState({'input': {'username': value}})} type={'username'} required maxLength={20} placeholder='Insert Username'></input>
          </div>
          <div className='Login-container-form-input'>
            <label>Password</label>
            <input ref={(value) => this.setState({'input': {'password': value.value}})} type={'password'} required maxLength={16} placeholder='Insert Password'></input>
          </div>
            <a onClick={() => this.#login()}>Login</a>
        </form>
      </div>
    );
  }

  #login() {
    // TODO: check credential
    // TODO: credential ? go_to_home : error
  }

}

export default Login;