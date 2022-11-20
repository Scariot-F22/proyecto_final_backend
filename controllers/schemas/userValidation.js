const { check } = require('express-validator');

module.exports = [
    check('email')
        .exists()
        .notEmpty()
        .withMessage("El campo email es requerido")
        .custom((value)=> value.includes('@') && value.includes(".com"))
        .withMessage("Email ingresado incorrecto")
    ,
    check('password')
        .exists()
        .notEmpty()
        .withMessage("campo password requerido")
];