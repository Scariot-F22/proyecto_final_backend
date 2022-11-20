const isAuth = async(req, res, next)=> {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send({ message: "Debes ingresar a tu cuenta de usuario para acceder al servicio" })
        }
        const token = req.headers.authorization.split(" ")[1];
        const response = await authService.decodeToken(token)
        req.user = response
        next();
    } catch (error) {
        return res.status(500).send({ message: "Ocurrió un error. Intente más tarde" })
    }
}

module.exports = {
    isAuth
}