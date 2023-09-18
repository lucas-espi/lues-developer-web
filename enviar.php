<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $consultaTexto = $_POST['consulta'];

    // Estructura HTML del mensaje
    $consulta = "<html><body style='background-image: linear-gradient(to top, #7ea2da, #97b3df, #afc4e4, #c8d6e9, #e2e7ee);'>";
    $consulta .= "<p>Enviado por: <b>$nombre</b>,</p><br>";
    $consulta .= "<p>Su email: <a href='mailto:$email'>$email</a></p><br>";
    $consulta .= "<p>Su teléfono: $telefono</p><br>";
    $consulta .= "<p>Mensaje: $consultaTexto</p><br>";
    $consulta .= "<p>Enviado el: " . date('d/m/y', time()) . "</p><br>";
    $consulta .= "</body></html>";

    $para = 'lues.dw@gmail.com';
    $asunto = 'Este email fue enviado desde luesdw.com.ar';

    // Encabezado para enviar un correo HTML
    $header = "From: $email\r\n";
    $header .= "Reply-To: $email\r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-Type: text/html; charset=UTF-8\r\n";

    if (mail($para, $asunto, $consulta, $header)) {
        header('Location: /success.html');
        exit;
    } else {
        echo "Hubo un problema al enviar el correo.";
    }
}
?>