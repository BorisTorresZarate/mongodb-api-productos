import { model, Schema } from 'mongoose'

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  vendedor: {
    type: String,
    required: true
  }
})

const Producto = model('Producto', productoSchema)

export default Producto
