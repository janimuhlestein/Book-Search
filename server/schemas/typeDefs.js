const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        savedBooks: [Book]
        bookCount: Int
    }

    type Book {
        _id: ID!
        authors: [String]!
        description: String
        bookID: String!
        image: String
        link: String
        title: String!
    }

    type BookInput {
        _id: ID!
        authors: [String]!
        description: String
        title: String!
        bookId: String!
        image: String
        link: String

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!):User
        savedBooks: [Book]
        bookCount: Int
    }

    type Mutation {
        loginUser(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput): User 
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;