const authServices = require('./authServices');
const User = require('../models/user');

const registerService = (email, password)=> {
    return new Promise((resolve, reject)=>{
        const newUser = new User({ email, password });
        User.findOne({ email: newUser.email }, (error, user)=> {
            if (error) {
                reject({ status:500, message: "Error al buscar coincidencia de usuarios. Intente mas tarde", error})
            }
            if (user) {
                reject({ status:400, message: "El usuario ya exite en la base de datos"}) 
            }
            newUser.save((error)=>{
                if (error) { 
                    reject({ status:500, message: "Error al crear usuario. Intente mas tarde", error})
                }            
                resolve({ status:201, message: "Usuario creado exitosamente", token: authServices.createToken(newUser)})
            })
        })
    })
}

//FIX ME
const loginService = (email, password) => {
    try {
        return new Promise((resolve, reject) => {
            User.findOne({ email }, (error, user) => {
                if(error){
                    reject({ status: 500, message: 'Se produjo un error al registrar el usuario.', error });
                }
                if(!password && !User.comparePassword(password)){
                    reject({ status: 401, message: 'El usuario o clave no son correctos.' });
                }
                resolve({ status: 200,  message: 'Te has logueado correctamente', token: authServices.createToken(user) });
            });
        });
    } catch (error) {
        throw error
    }
}

module.exports = {
    registerService,
    loginService
}