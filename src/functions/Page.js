class Page {
  #name;
  #path;

  constructor(name, path) {
    this.#name = name;
    this.#path = path;
  }

  getName() {
    return this.#name;
  }

  getPath() {
    return this.#path;
  }

}

export default Page;