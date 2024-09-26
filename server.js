const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar el middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para manejar la solicitud del formulario
app.post('/submit', (req, res) => {
    const { date, days, turno } = req.body;
    const query = 'INSERT INTO tu_tabla (date, days, turno) VALUES (?, ?, ?)';
    db.query(query, [date, days, turno], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.send('Datos insertados correctamente');
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});