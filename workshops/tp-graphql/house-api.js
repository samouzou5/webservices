const {RESTDataSource} = require("apollo-datasource-rest");

class HouseAPI extends RESTDataSource  {
    constructor() {
        super();
        this.baseURL = "https://anapioficeandfire.com/api/";
    }

    getHouses() {
        return this.get(`houses`);
    }

    getHouse(id) {
        return this.get(`houses/${id}`);
    }
}

module.exports = HouseAPI;