import express from 'express'
import graphqlHTTP from 'express-graphql'
import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} from 'graphql'

import products from './data'

const app = express()
const PORT = process.env.port || 3000

let voteType = new GraphQLObjectType({
	name: 'vote',
	description: 'vote of the product',
	fields: () => ({
		star: {
			type: GraphQLInt,
			description: 'one_star of the vote'
		},
		men: {
			type: GraphQLInt,
			description: 'men of vote'
		},
		women: {
			type: GraphQLInt,
			description: 'woman of vote'
		}
	})
})

let productType = new GraphQLObjectType({
	name: 'products',
	description: 'Detail of the product',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Name of the product'
		},
		price: {
			type: GraphQLInt,
			description: 'price of product'
		},
		category: {
			type: new GraphQLList(GraphQLString),
			description: 'category of product'
		},
		vote: {
			type: new GraphQLList(voteType),
			description: 'vote of product'
		}
	})
})

let queryType = new GraphQLObjectType({
	name: 'queryProduct',
	description: "query of product",
	fields: () => ({
		hey: {
			type: GraphQLString,
			resolve: ( source, args ) =>  {
				return products[0].name
			}
		},
		getProducts: {
			type: new GraphQLList(productType),
			resolve: (_, args) => {
				return products
			}
		},
		getProductByPrice: {
			type: new GraphQLList(productType),
			args : {
				price: {
					type: GraphQLInt
				}
			},
			resolve: (_, args) => {
				let filterProduct = products.filter((product) => product.price <= args.price)
				return filterProduct
			}
		}
	})
})

let MyGraphQLSchema = new GraphQLSchema({
	query: queryType
})

app.use('/graphql', graphqlHTTP({
	schema: MyGraphQLSchema,
	graphiql: true
}))

app.listen(PORT, () => {
	console.log("Server running on localhost:", PORT)
})