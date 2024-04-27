import jwt from 'jsonwebtoken';

export const crearJWT = (uid,name) => {

    return new Promise((resolve,reject) => {
        const payload = {uid,name}

        jwt.sign(payload,process.env.SECRET_KEY_JWT,{
            expiresIn: '24h'
        }, (err,token) => {
            if(err){
                console.log('no se pudo generar el token')
                reject(err)
            }

            resolve(token)
        })
    })


}