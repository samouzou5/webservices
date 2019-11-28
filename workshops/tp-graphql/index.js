const {ApolloServer, gql} = require('apollo-server');
const CharacterAPI = require('./character-api');
const BookAPI = require('./book-api');
const HouseAPI = require('./house-api');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
    type Book {
        url: String
        name: String
        isbn: String
        authors: [String]
        numberOfPages: Int
        publiser: String
        country: String
        mediaType: String
        released: String
        characters: [Character]
        povCharacters: [String]
    }

    type Character {
        url: String
        name: String
        gender: String
        culture: String
        born: String
        died: String
        titles: [String]
        aliases: [String]
        father: Character
        mother: Character
        spouse: Character
        allegiances: [House]
        books: [Book]
        povBooks: [Book]
        tvSeries: [String]
        playedBy: [String]
    }

    type House {
        url: String
        name: String
        region: String
        coatOfArms: String
        words: String
        titles: [String]
        seats: [String]
        currentLord: Character
        heir: Character
        overlord: House
        founded: String
        founder: Character
        diedOut: String
        ancestralWeapons: [String]
        cadetBranches: [House]
        swornMembers: [Character]
    }

    type Query {
        books: [Book]
        book(id: Int!): Book
        character(id: Int!): Character
        house(id: Int!): House,
        characters: [Character],
        houses: [House]
    }
`;

const resolvers = {
    Query: {
        characters(_source, args, {dataSources}) {
            return dataSources.characterAPI.getCharacters();
        },
        character(_source, {id}, {dataSources}) {
            return dataSources.characterAPI.getCharacter(id);
        },
        books(_source, args, {dataSources}) {
            return dataSources.bookAPI.getBooks();
        },
        book(_source, {id}, {dataSources}) {
            return dataSources.bookAPI.getBook(id);
        },
        house(_source, {id}, {dataSources}) {
            return dataSources.houseAPI.getHouse(id);
        },
        houses(_source, args, {dataSources}) {
            return dataSources.houseAPI.getHouses();
        },
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            characterAPI: new CharacterAPI(),
            bookAPI: new BookAPI(),
            houseAPI: new HouseAPI()
        }
    }
});

// The `listen` method launches a web server.
server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});