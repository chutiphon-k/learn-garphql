import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} from 'graphql'

import { productType } from './inputtype'
import { products } from '../../data'
import * as productServices from './services'

let getHey = {
	type: GraphQLString,
	resolve: (_, args) =>  {
		return 'Hello GraphQL'
	}
}

let getProducts = {
	type: new GraphQLList(productType),
	resolve: (_, args) => {
		return new Promise((resolve, reject) => {
			productServices.getProducts((data) => {
				resolve(data)
			})
		})
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
		let priceParams = args.price
		return new Promise((resolve, reject) => {
			productServices.getProductByPrice(priceParams, (data) =>{
				resolve(data)
			})
		})
	}
}

export {
	getHey,
	getProducts,
	getProductByPrice
}