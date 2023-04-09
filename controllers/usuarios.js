const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    
    const query = req.query;

    res.status(201).json({
        query
    });
}

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.status(202).json(
        {
            id
        }
    );
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.status(203).json({
        body
    });
}

const usuariosDelete = (req, res = response) => {
    res.status(204).json('Hello! controllador delte');
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}