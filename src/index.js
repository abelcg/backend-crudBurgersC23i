import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import router from './routes/products.routes';
import auth from './routes/users.routes';
import * as dotenv from 'dotenv';


//console.log('desde mi backend');


//crear la instancia de Express 
const app = express();

//crear un puerto

app.set('port', process.env.PORT || 4001);

app.listen(app.get('port'), ()=>{
    
    console.log('**********************************');
    console.log('Estoy en puerto ' + app.get('port'));
    console.log('**********************************');
});

//middlewares
dotenv.config()
app.use(morgan('dev')); //nos da información de la consulta: tipo, status, tiempo de ejecución
app.use(cors()); // no permite recibir peticiones remotas a nuestra API
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //estos dos últimos nos permiten recibir e interpretar el json de la req

//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../public')));


//rutas de pruebas

app.use('/apiBurgers', router);
app.use('/apiBurgers/auth', auth);

/* app.get('/', (req, res) => {
    res.send('esto es una prueba desde mi backend')
});

app.delete('/borrarProducto', (req, res) => {
    res.send('se borró el producto')
});
 */
