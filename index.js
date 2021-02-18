const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')


const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const { MONGODB } = require('./config.js')


const PORT = process.env.port || 5000;



const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})


mongoose
    .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongo connected');
        return server.listen({ port: PORT })
    })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    })
    .catch(err => {
        console.error(err)
    })
