import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} from 'graphql'

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

export {
	productType
}