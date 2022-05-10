import '../css/Anime.css';
import Logged from './Logged';

class Anime extends Logged {

  componentDidMount() {
    this.setState({data: '123'});
  }

  _renderBody() {
    return <h1>HELLO</h1>
  }

}

export default Anime;