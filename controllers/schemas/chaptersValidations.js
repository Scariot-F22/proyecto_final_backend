const { check } = require('express-validator');

module.exports = [
    check('title')
        .exists()
        .notEmpty()
        .withMessage("El campo title es requerido")
    ,
    check('description')
        .exists()
        .notEmpty()
        .withMessage("El campo description es requerido")
    ,
    check('video')
    .exists()
    .notEmpty()
    .withMessage("El campo video es requerido")
];