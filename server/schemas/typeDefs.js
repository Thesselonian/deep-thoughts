// import the gql tagged template function
const { gql } = require('apollo-server-express');

//create our typeDefs
    // define what data specifically will return with each query as well as the type
    // of data

    //define the names of the queries as the type of data that is expected to return
    //the name of the query corresponds to the query name in resolvers
const typeDefs = gql`

    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }

    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User]
    }

    type Query {
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }
`;

// export the typeDefs
module.exports = typeDefs;