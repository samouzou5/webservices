const {RESTDataSource} = require("apollo-datasource-rest");

class CharacterAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://anapioficeandfire.com/api/";
    }

    getCharacter(id) {
        return this.get(`characters/${id}`);
    }

    getCharacters() {
        return this.get(`characters`);
    }
}

module.exports = CharacterAPI;