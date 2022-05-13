import Default from './Default';
import Home from './Home';
import '../css/Login.css';

class Login extends Default {

  componentDidMount() {
    this.setState({
      'data': {
        'logged': false
      },
      'input': {
        'username': '',
        'password': ''
      }
    });
  }

  _renderData() {
    return (
      <div className='Login-container'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt='Site Logo'></img>
        <form className='Login-container-form' onSubmit={(event) => this.#onSubmitHandler(event)}>
          <div className='Login-container-form-input'>
            <label>Username</label>
            {/* TODO: fix ref="get input" */}
            <input id='username' value={this.state.input.username} onChange={(event) => this.#onChangeInputHandler(event)} type={'username'} required maxLength={20} placeholder='Insert Username'></input>
          </div>
          <div className='Login-container-form-input'>
            <label>Password</label>
            <input id='password' value={this.state.input.password} onChange={(event) => this.#onChangeInputHandler(event)} type={'password'} required maxLength={16} placeholder='Insert Password'></input>
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }

  #onChangeInputHandler(event) {
    this.setState((prevState) => (
      {
        'input': {
          ...prevState.input,
          [event.target.id]: event.target.value
        }
      }
    ));
  }

  #onSubmitHandler(event) {
    // TODO: check credential
    const resPromise = this._request.post('http://localhost:8081/api/user/check_credentials/', {
      username: this.state.input.username,
      password: this.state.input.password
    });
    resPromise.then(res => {
      if(res.status === 200) {
        res.data.then(data => {
          sessionStorage.setItem('user', JSON.stringify(data));
          this.props.redirect(<Home redirect={this.props.redirect} />);
        });
      } else {
        // TODO: show bad credential error
      }
    });

    event.preventDefault();
  }

}

export default Login;