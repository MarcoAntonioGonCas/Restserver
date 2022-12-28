const { request, response } = require("express")




const usuarioGet = (req = request, res = response) => {

    const {apiKey} = req.query
    res.status(404).json(
        {
            ok: true,
            msg: "get-controlador",
            apiKey
        }
    )
};
const usuarioPost = (req, res) => {
    const {nombre,edad} = req.body

    res.status(201).json(
        {
            ok: true,
            msg: "post",
            nombre,
            edad
        }
    )
};
const usuarioPut = (req = request, res) => {

    const { id } = req.body
    const {id:idParam} = req.params

    if (!id) {
        res.status(400).json({ message: 'Falto el id',
        idParam })
    } else {
        res.status(200).json({ message: 'Modificado correctamente',idParam })
    }

}
const usuarioDelete = (req, res) => {
    res.status(404).json(
        {
            ok: true,
            msg: "delete"
        }
    )
}

const usuarioPatch = (req, res) => {
    res.status(404).json(
        {
            ok: true,
            msg: "patch"
        }
    )
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete,
    usuarioPatch

}

