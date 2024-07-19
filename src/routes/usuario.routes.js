import { Router } from 'express'
import { deleteById, getById, index, Register, updateById } from '../controllers/usuario.controller.js'

const router = Router()
//mostrar
router.get('/', index)
//registrar
router.post('/register', Register)
//mostrar por id
router.get('/:id',getById)
//actualizar un usuario
router.put('/:id',updateById)
//eleminar un usuario
router.delete('/:id',deleteById)

export default router
