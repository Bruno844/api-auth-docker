import { response, request } from 'express';
import jwt from 'jsonwebtoken';


export const validateJwt = (req= request ,res= response,next) => {

    //*
    const token = req.header('x-token')

    if(!token) {
        return res.status(401).json({
            msg: 'no hay token en la peticion'
        })
    }

    try {

        const payload = jwt.verify(
            token,
            process.env.SECRET_KEY_JWT

        );

        req.uid = payload.uid,
        req.name = payload.name

        
    } catch (error) {
        console.log(error)
    }

    //*pasa a la siguiente funcion
    next();

}