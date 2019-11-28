const {RESTDataSource} = require("apollo-datasource-rest");

class BookApi extends RESTDataSource  {
    constructor() {
        super();
        this.baseURL = "https://anapioficeandfire.com/api/";
    }

    getBooks() {
        return this.get(`books`);
    }

    getBook(id) {
        return this.get(`books/${id}`);
    }
}

module.exports = BookApi;