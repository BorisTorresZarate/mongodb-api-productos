import Usuario from '../models/Usuario.js'

export async function index(req, res) {
    try {
        const usuarios = await Usuario.find()
        res.json(usuarios)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export function Register(req, res) {
    try {
        const { nombre, apellidos, username, password, imagen, rol } = req.body
        if (!nombre && !apellidos && !username && !password && !imagen && !rol) return console.log({ message: "faltan datos" })
        res.json({ message: "Producto Ingresado correctamente" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getById(req, res) {

    try {
        const { id } = req.params
        if (!Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid id' })
        }
        //busca al usuario por id en la bd
        const user = await Usuario.findById(id).exec();
        if (!user) {
            return res.status(404).json({ message: 'usuario no registrado' });
        }
        if (id === user) {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export async function updateById(req, res) {
    try {
        const { id } = req.params
        // check id validity
        if (!Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid id' })
        }
        const response = await Usuario.findOneAndUpdate(
            { _id: id },
            req.body, { new: true }
        )
        res.send(response)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function deleteById(req, res) {
    try {
        const { id } = req.params
        // check id validity
        if (!Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid id' })
        }
        const response = await Usuario.findOneAndDelete({ _id: id })
        res.send(response)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
