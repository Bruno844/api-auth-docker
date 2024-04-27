import { crearJWT } from "../helpers/createJwt.js"
import userModel from "../models/userModel.js"



export const viewProfileUser = (req,res) => {

    const {name} = req.body

    res.json({
        msg: `hola ${name}`
    })

}

export const registerUser = async (req,res) => {

    const {email, password} = req.body

    try {

        let user = await userModel.findOne({email, password})

        if(user) {
            return res.status(400).json({
                ok: false,
                msg: 'ya existe un usuario con ese correo'
            })
        }

        user = new userModel(req.body);

        //*guardar
        await user.save();

        //*creamos token a usuario
        const token = await crearJWT(user.id, user.name)

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token: token
            
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'error a la hora de registrar'
        })
    }


}



export const loginUser = async (req,res) => {

    const {email,password} = req.body;

    try {
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(400).json({
                ok: false,
                msg: 'no existe un usuario con ese mail'
            })
        }


        //*generamos token
        const token = await crearJWT(user.id, user.name)

        res.json({
            ok: true,
            uid: user.id,
            email,
            token
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'error a la hora de loguear'
        })
        
    }
    
    

}