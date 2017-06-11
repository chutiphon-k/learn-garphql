import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} from 'graphql'

import { productType } from './inputtype'
import { products } from '../../data'

let getHey = {
	type: GraphQLString,
	resolve: (_, args) =>  {
		return products[0].name
	}
}

let getProducts = {
	type: new GraphQLList(productType),
	resolve: (_, args) => {
		return products
	}
}

let getProductByPrice = {
	type: new GraphQLList(productType),
	args: {
		price: {
			type: GraphQLInt
		}
	},
	resolve: (_, args) => {
		return products.filter((product) => product.price <= args.price)
	}
}

export {
	getHey,
	getProducts,
	getProductByPrice
}