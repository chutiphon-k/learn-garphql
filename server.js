import express from 'express'
import graphqlHTTP from 'express-graphql'

import MyGraphQLSchema from './graphql/schema'

const app = express()
const PORT = process.env.port || 3000

app.use('/graphql', graphqlHTTP({
	schema: MyGraphQLSchema,
	graphiql: true
}))

app.listen(PORT, () => {
	console.log("Server running on localhost:", PORT)
})