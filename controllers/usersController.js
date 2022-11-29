const { userServices } = require('../services')
const { validationResult } = require('express-validator')

const register = async(req, res)=> {
    try {
        const resultValidation = validationResult(req);
        const haveError = !resultValidation.isEmpty()
        const { email, password } = req.body;
    
        if (haveError) {
            return res.status(400).send(resultValidation)
        }
        const response = await userServices.registerService(email, password).catch(error => error);
        res.status(response.status).send(response)
    }catch(error){
        res.status(500).send(error)
    }
} 

//FIX ME
const login = async(req, res)=> {
    try {
        const { email, password } = req.body;
    
        const resultValidation = validationResult(req);
        const haveError = !resultValidation.isEmpty();
        if (haveError) {
            return res.status(400).send(resultValidation)
        }
        const result = await userServices.loginService(email, password).catch(error => error);
        res.status(result.status).send(result);
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    register,
    login
}