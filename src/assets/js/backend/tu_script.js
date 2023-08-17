const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 3000; // Cambia al puerto que prefieras

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para procesar el formulario
app.post('/', (req, res) => {
    const { nombre, email, telefono, consulta } = req.body;

    // Configuración del transporte de correo (usando SMTP)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Contenido del correo electrónico
    const mailOptions = {
        from: email,
        to: 'pruebareal@gmail.com',
        subject: 'Nueva consulta',
        text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nConsulta:\n${consulta}`
    };

    // Envía el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error al enviar el mensaje');
        } else {
            console.log('Mensaje enviado exitosamente:', info.response);
            res.send('Mensaje enviado exitosamente.');
        }
    });
});

// app.listen(port, () => {
//     console.log(`Servidor escuchando en el puerto ${port}`);
// });