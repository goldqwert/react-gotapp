class GotClass {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  async getAllBooks() {
    return await this.getResource(`/books/`);
  }

  async getBook(id) {
    return await this.getResource(`/books/${id}/`);
  }

  async getAllCharacters() {
    return await this.getResource(`/characters?page=5&pageSize=10`);
  }

  async getCharacter(id) {
    const response = await this.getResource(`/characters/${id}`);
    console.log(response);
    return response;
  }

  async getAllHouses() {
    return await this.getResource(`/houses/`);
  }

  async getHouse(id) {
    return await this.getResource(`/houses/${id}/`);
  }
}

const gotService = new GotClass();

export default gotService;
