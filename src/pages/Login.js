import Default from './Default';
import Home from './Home';
import Register from './Register';
import '../css/Login.css';

class Login extends Default {

  componentDidMount() {
    this.setState({
      data: {
        logged: false
      },
      input: {
        username: '',
        password: ''
      }
    });
  }

  _renderData() {
    return (
      <div className='Login-container'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt='Site Logo'></img>
        <div className='Login-container-form_container'>
          <form className='Login-container-form' onSubmit={(event) => this.#onSubmitHandler(event)}>
            <div className='Login-container-form-input'>
              <label>Username</label>
              <input id='username' value={this.state.input.username} onChange={(event) => this.#onChangeInputHandler(event)} type={'username'} required maxLength={20} placeholder='Insert Username'></input>
            </div>
            <div className='Login-container-form-input'>
              <label>Password</label>
              <input id='password' value={this.state.input.password} onChange={(event) => this.#onChangeInputHandler(event)} type={'password'} required maxLength={16} placeholder='Insert Password'></input>
            </div>
            <button type='submit'>Login</button>
          </form>
          <p>
            You don't have an account?
            <button onClick={() => this.props.redirect(<Register redirect={this.props.redirect} />)}>Register</button>
          </p>
        </div>
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
    // Check credentials
    const resPromise = this._request.post('http://localhost:8081/api/user/check_credentials/', {
      username: this.state.input.username,
      password: this.state.input.password
    });
    resPromise.then(res => {
      if(res.ok) {
        res.data.then(data => {
          sessionStorage.setItem('user', JSON.stringify(data));
          sessionStorage.setItem('token', data.token);
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