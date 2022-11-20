const jwt = require('jwt-simple');
const { DateTime } = require('luxon');

const createToken = (user)=> {
    const payload = {
        sub: user._id,
        iat: DateTime.now().toMillis(),
        exp: DateTime.now().plus({ days: 5 }).toMillis()
    }
    return jwt.encode(payload, process.env.SECRET_KEY)
}

const decodeToken = async (token)=>{
        try{
            const payload = jwt.decode(token, process.env.SECRET_KEY);
            if (payload.exp <= DateTime.now().toMillis()) {
                return { status: 401, mesagge: "Token expirado"}
            }
            return payload.sub;
        }catch(error){
            return {status: 500, mesagge: "Token invalido", error }
        }
}

module.exports = {
    createToken,
    decodeToken
}