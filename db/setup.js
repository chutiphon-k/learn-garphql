import mongoose from 'mongoose'
import Bluebird from 'bluebird'

mongoose.Promise = Bluebird
mongoose.connect('mongodb://localhost:27017/learngraphql')

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
	console.log('DB Connected')
})

let Products = mongoose.model('product', {
	name: String,
	price: Number,
	category: Array,
	vote: Array
})

export {
	Products
}