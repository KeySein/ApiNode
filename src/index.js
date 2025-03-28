// Importación de módulos

const express = require('express');
const app = express();
const morgan = require('morgan');

const cors = require('cors');

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); 

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); 
app.use(express.json());

app.use (cors());
// Nuestro primer web service
app.get('/', (req, res) => {
    res.json({
        "mensaje": "Mi primer pag"
    }
  );
});

app.post('/sumar', (req, res) => { //http://localhost/sumar
    const { num1, num2 } = req.body; // El req.body está esperando los números

    // Validar que se hayan enviado los dos números y que no estén vacíos
    if (num1 === undefined || num2 === undefined) {
        return res.status(400).send({ error: 'Faltan números para sumar' });
    }

    // Sumar los números (asegurando que sean convertidos a número)
    const resultado =  num1 + num2 ;

    // Enviar el resultado
    res.send({ resultado });
});


// Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});