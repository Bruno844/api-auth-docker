import express from 'express'
import cors from 'cors'
import authRoutes from './src/routes/authRoutes.js'

const app = express();

//*middlewares
app.use(express.json());
app.use(cors())



//*rutas
app.use('/api/auth', authRoutes)





//*conexion
app.listen(3000, () => {
    console.log('server corriendo en puerto', 3000)
})