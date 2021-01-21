import { model, Schema } from 'mongoose'

const schema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
})

export default model('productModel', schema)
