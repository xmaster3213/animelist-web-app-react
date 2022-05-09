import Home from '../pages/Home'
import Anime from '../pages/Anime'

class PageManager {

  pageClasses;

  constructor(loadPageFunction) {
    this.pageClasses = {
      HOME: <Home fun={loadPageFunction} />,
      ANIME: <Anime fun={loadPageFunction} />,
    };
  }

}

export default PageManager;