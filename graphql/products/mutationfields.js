import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} from 'graphql'

import { productType } from './inputtype'
import { products } from '../../data'

let addProduct = {
	type: new GraphQLList(productType),
	args: {
		name: {
			type: GraphQLString
		},
		price: {
			type: GraphQLInt
		},
		category: {
			type: new GraphQLList(GraphQLString)
		}
	},
	resolve: (_, args) => {
		let product = {
			name: args.name,
			price: args.price,
			category: args.category
		}
		products.push(product)
		return products
	}
}

let deleteProduct = {
	type: new GraphQLList(productType),
	args: {
		name: {
			type: GraphQLString
		}
	},
	resolve: (_, args) => {
		return products.filter((product) => product.name != args.name)
	}
}

export {
	addProduct,
	deleteProduct
}