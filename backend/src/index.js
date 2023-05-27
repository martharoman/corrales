import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import usuariosRoutes from './routes/usuarios'

const app = express()

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use(usuariosRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
});



app.listen(5000);

console.log('Server on port 5000');