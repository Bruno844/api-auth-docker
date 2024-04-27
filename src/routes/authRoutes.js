import { Router } from "express";
import { getUser, loginUser, registerUser } from "../controllers/authController.js";

const router = Router()


router.get('/user', getUser )
router.post('/register', registerUser)
router.post('/login', loginUser)



export default router