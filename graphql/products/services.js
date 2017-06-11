import { Products } from '../../db/setup'

let getProducts = (callback) => {
	Products.find((err, result) => {
		if(err) {
			callback(err)
		} else {
			callback(result)
		}
	})
}

let getProductByPrice = (price, callback) => {
	Products.find({ price: { $lt: price } }, (err, result) => {
		if(err) {
			callback(err)
		} else {
			callback(result)
		}
	})
}

let createProduct = (args, callback) => {
	let product = new Products({
		name: args.name,
		price: args.price,
		category: args.category
	})
	product.save((err, result) => {
		if(err){
			callback(err)
		} else {
			callback(result)
		}
	})
}

let deleteProduct = (productId, callback) => {
	Products.findOneAndRemove({ _id: productId }, (err, result) => {
		if(err){
			callback(err)
		} else {
			callback(result)
		}
	})
} 

export {
	getProducts,
	getProductByPrice,
	createProduct,
	deleteProduct
}