import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} from 'graphql'

import {
	getHey,
	getProducts,
	getProductByPrice
} from './products/queryfields'
import {
	addProduct,
	deleteProduct
} from './products/mutationfields'

let queryType = new GraphQLObjectType({
	name: 'queryProduct',
	description: "query of product",
	fields: {
		hey: getHey,
		getProducts,
		getProductByPrice
	}
})

let mutationType = new GraphQLObjectType({
	name: 'mutationPtoduct',
	description: 'mutation of product',
	fields: {
		addProduct,
		deleteProduct
	}
})

let MyGraphQLSchema = new GraphQLSchema({
	query: queryType,
	mutation: mutationType
})

export default MyGraphQLSchema