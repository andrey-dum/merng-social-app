const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')

const Post = require('./models/Post')
const { MONGODB } = require('./config.js')


const PORT = process.env.port || 5000;


const typeDefs = gql`
    type Post{
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Query{
        getPosts: [Post]
    }
`

const resolvers = {
    Query: {
        getPosts: async () => {
            try {
                const posts = await Post.find()
                return posts 
            } catch (error) {
                throw new Error(error)
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers
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
