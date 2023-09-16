<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $consultaTexto = $_POST['consulta'];

    // Estructura HTML del mensaje
    $consulta = "<html><body>";
    $consulta .= "<p>Enviado por: <strong>$nombre</strong>,</p><br>";
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