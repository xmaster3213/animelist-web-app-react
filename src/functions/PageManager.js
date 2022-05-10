import Home from '../pages/Home'
import Anime from '../pages/Anime'

class PageManager {

  pageClasses;

  constructor(loadPageFunction) {
    this.pageClasses = {
      HOME: <Home redirect={loadPageFunction} />,
      ANIME: <Anime redirect={loadPageFunction} />,
    };
  }

}

export default PageManager;