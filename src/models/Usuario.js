import { model, Schema } from 'mongoose'

const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  ussername: {
    type: string,
    required: true
  },
  password: {
    type: string,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  rol:{
    type: String,
    required: true,
    default: "alumno"
  }
})

const Usuario = model('Usuario', usuarioSchema)

export default Usuario
