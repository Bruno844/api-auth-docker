import express from 'express'
import cors from 'cors'
import authRoutes from './src/routes/authRoutes.js'
import dotenv from 'dotenv';
import { dbConnection } from './src/database/config.js';

//*lee variables de entorno
dotenv.config();

const app = express();

//*middlewares
app.use(express.json());
app.use(cors())


//*conexion a la db
dbConnection();



//*rutas
app.use('/api/auth', authRoutes)





//*conexion
app.listen(3000, () => {
    console.log('server corriendo en puerto', 3000)
})