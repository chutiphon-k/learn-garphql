import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLList,
	GraphQLInt
} from 'graphql'

import { productType } from './inputtype'
import { products } from '../../data'
import * as productServices from './services'

let addProduct = {
	type: productType,
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
		return new Promise((resolve, reject) => {
			productServices.createProduct(args, (data) => {
				console.log('------', data)
				resolve(data)
			})
		})
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
		return new Promise((resolve, reject) => {
			productServices.deleteProduct(args.id, (data) => {
				console.log(data)
				resolve(data)
			})
		})
	}
}

export {
	addProduct,
	deleteProduct
}