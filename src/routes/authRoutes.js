import { Router } from "express";
import { loginUser, registerUser, viewProfileUser } from "../controllers/authController.js";
import { validateJwt } from "../middlewares/validateJwt.js";
import { check } from "express-validator";
import { validateCampos } from "../middlewares/validateCampos.js";

const router = Router()


router.get('/profile', validateJwt,  viewProfileUser )

router.post('/register',[
    check('name', 'el nombre debe ser obligatorio').not().isEmpty(),
    check('email', 'el correo debe tener el @').isEmail(),
    check('password', 'la contraseña como minimo 6 digitos').isLength({min: 6}),
    validateCampos
] ,registerUser)

router.post('/login', loginUser)




export default router