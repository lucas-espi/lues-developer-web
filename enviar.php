<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&display=swap');
html{
    font-family:'Roboto Condensed', sans-serif;
}
body{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.data-personal{
    font-size: 1.25rem;
    font-weight: 600;
}
.data-mensaje{
    font-size: 1rem;
    font-weight: 400;   
}
</style>
<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $consultaTexto = $_POST['consulta'];

    // Estructura HTML del mensaje
    $consulta = "<html><body >";
    $consulta .= "<p class='data-personal'>Enviado por: <b>$nombre</b>,</p><br>";
    $consulta .= "<p class='data-personal'>Su email: <a href='mailto:$email'>$email</a></p><br>";
    $consulta .= "<p class='data-personal'>Su teléfono: $telefono</p><br>";
    $consulta .= "<p class='data-mensaje'>Mensaje: $consultaTexto</p><br>";
    $consulta .= "<p class='data-mensaje'>Enviado el: " . date('d/m/y', time()) . "</p><br>";
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
