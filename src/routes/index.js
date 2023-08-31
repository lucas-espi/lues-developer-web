const {Router} = require('express');
const router = Router();
const nodemailer = require('nodemailer')
const Swal = require('sweetalert2');
require('dotenv').config();



router.post('/send-email', async (req, res)=>{
    // console.log(req.body);
    const {nombre, correo, telefono, consulta} = req.body;

    contentHTML = `
          <h1>Informacion de Usuario: </h1>
          <ul>
          <li><b>Nombre:</b>${nombre}</li>
          <li><b>Correo Electronico</b>:${correo}</li>
          <li><b>Telefono:</b>${telefono}</li></br>
          </ul>
          <p style="font-size: 1rem;">Consulta:${consulta}</p>;
    `

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure:true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.SECRET_KEY,
        },
    });

    const info = await transporter.sendMail({
        from:`'Lucas desde: '<${process.env.EMAIL_USER}>`,
        to:'lucasare94@gmail.com',
        subject: 'Formulario de contacto prueba NODEMEAILER',
        html: contentHTML,
    })

    console.log('mensaje enviado:', info.messageId);

    // creo el objeto para ser utilizado en sweet alert
    const response = {
        success: true,
        message: 'Correo enviado correctamente',
    };

    // Muestra el SweetAlert en el lado del cliente
    const sweetAlertScript = 
                `
                <script>
                        Swal.fire({
                            icon: 'success',
                            title: 'Éxito',
                            text: '${response.message}',
                            timer: 2000, // Mostrar durante 2 segundos
                            timerProgressBar: true,
                            showConfirmButton: false // No mostrar el botón de confirmación
                        }).then(() => {
                            window.location.href = '/index.html'; // Redirige después del SweetAlert
                        });
                </script>
                `;

    res.send(sweetAlertScript);
})




module.exports = router;