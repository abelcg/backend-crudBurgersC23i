import express from 'express'

//console.log('desde mi backend');


//crear la instancia de Express 
const app = express();

//crear un puerto

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    
    console.log('**********************************');
    console.log('Estoy en puerto ' + app.get('port'));
    console.log('**********************************');
});



//rutas de pruebas

app.get('/', (req, res) => {
    res.send('esto es una prueba desde mi backend')
});

app.delete('/borrarProducto', (req, res) => {
    res.send('se borró el producto')
});
