import Page from './Page';

const pageNames = {
  HOME: 'Home',
  TEST: 'Test'
};

class PageManager {

  #pages;
  #currentPage;


  constructor(initialPageName) {
    this.#pages = [];
    const pagesDir = './pages/';
    for (const name in pageNames) {
      this.#pages.push(new Page(pageNames[name], pagesDir + pageNames[name]));
    }
    this.#currentPage = this.#pages.find((page) => page.getName() === pageNames[initialPageName]);
  }

  getCurrentPage() {
    return this.#currentPage;
  }

}

export default PageManager;