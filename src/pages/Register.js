import Default from "./Default";
import Home from "./Home";
import '../css/Register.css'
import Login from "./Login";

class Register extends Default {

  componentDidMount() {
    this.setState({
      data: {
        logged: false
      },
      input: {
        username: '',
        password: '',
        email: '',
        phone: '',
        image: '',
        amministrator: false
      }
    });
  }

  _renderData() {
    return (
      <div className='Register-container'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt='Site Logo'></img>
        <div className='Register-container-form_container'>
          <form className='Register-container-form' onSubmit={(event) => this.#onSubmitHandler(event)}>
            <div className='Register-container-form-input'>
              <label>Username</label>
              <input id='username' value={this.state.input.username} onChange={(event) => this.#onChangeInputHandler(event)} type='username' required maxLength={20} placeholder='Insert Username'></input>
            </div>
            <div className='Register-container-form-input'>
              <label>Password</label>
              <input id='password' value={this.state.input.password} onChange={(event) => this.#onChangeInputHandler(event)} type='password' required maxLength={16} placeholder='Insert Password'></input>
            </div>
            <div className='Register-container-form-input'>
              <label>Email</label>
              <input id='email' value={this.state.input.email} onChange={(event) => this.#onChangeInputHandler(event)} type='email' required maxLength={40} placeholder='Insert Email'></input>
            </div>
            <div className='Register-container-form-input'>
              <label>Phone number</label>
              <input id='phone' value={this.state.input.phone} onChange={(event) => this.#onChangeInputHandler(event)} type='tel' maxLength={13} placeholder='Insert Phone number'></input>
            </div>
            <div className='Register-container-form-input'>
              <label>Image</label>
              <input id='image' value={this.state.input.image} onChange={(event) => this.#onChangeInputHandler(event)} type='url' maxLength={100} placeholder='Insert Image url'></input>
            </div>
            <button type='submit'>Register</button>
          </form>
          <p>
            You already have an account?
            <button onClick={() => this.props.redirect(<Login redirect={this.props.redirect} />)}>Login</button>
          </p>
        </div>
      </div>
    );
  }

  #onChangeInputHandler(event) {
    this.setState((prevState) => (
      {
        input: {
          ...prevState.input,
          [event.target.id]: event.target.value
        }
      }
    ));
  }

  // TODO: implement
  #onSubmitHandler(event) {
    // Check credentials
    const resPromise = this._request.post('http://localhost:8081/api/user/', {
      username: this.state.input.username,
      password: this.state.input.password,
      email: this.state.input.email,
      phone: this.state.input.phone,
      image: this.state.input.image,
      amministrator: this.state.input.amministrator
    });
    resPromise.then(res => {
      if(res.ok) {
        res.data.then(data => {
          sessionStorage.setItem('user', JSON.stringify(data));
          sessionStorage.setItem('token', data.token);
          this.props.redirect(<Home redirect={this.props.redirect} />);
        });
      } else {
        // TODO: show couldn't create user
      }
    });

    event.preventDefault();
  }

}

export default Register;