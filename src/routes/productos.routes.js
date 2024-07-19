import { Router } from 'express'
import { index, Register } from '../controllers/productos.controller.js'

const router = Router()

router.get('/', index)
router.post('/register', Register)

export default router
