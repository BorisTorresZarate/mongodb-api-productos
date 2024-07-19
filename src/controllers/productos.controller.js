import Producto from '../models/Producto.js'

export const index = async (req, res) => {
  const productos = await Producto.find()
  res.json(productos)
}

export function Register(req, res) {
  const { nombre, categoria , precio, stock, vendedor} = req.body
  if(!nombre && !categoria && !precio && !stock && !vendedor)return console.log({message: "faltan datos"})
  res.json({message: "Producto Ingresado correctamente"})
}
