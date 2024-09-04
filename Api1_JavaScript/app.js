const express = require('express');
const app = express();
const port = 8080;

// Endpoint 1: Verificación de estado
app.get('/check', (req, res) => {
    res.status(200).send('OK');
});

// Endpoint 2: Retorna un objeto JSON
app.get('/', (req, res) => {
    const responseObject = {
        Instancia: "Instancia #1 - API #1",
        Curso: "Seminario de Sistemas 1",
        Estudiante: "Kevin Samayoa - 200915348"
    };
    res.json(responseObject);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Express API escuchando en el puerto http://localhost:${port}`);
});

/*app.listen(8080, function () {
    console.log('app escuchando en el puerto 8080');
})*/