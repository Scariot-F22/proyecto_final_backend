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
    check('image')
    .exists()
    .notEmpty()
    .withMessage("El campo image es requerido")
    ,
    check('category')
    .exists()
    .notEmpty()
    .withMessage("campo category requerido")
];