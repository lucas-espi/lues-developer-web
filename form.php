

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $consultaTexto = $_POST['consulta'];

    $consulta = "Este mensaje fue enviado por " . $nombre . ",\r\n";
    $consulta .= "Su email es: " . $email . "\r\n";
    $consulta .= "Su telefono es: " . $telefono . "\r\n";
    $consulta .= "Consulta: " . $consultaTexto . "\r\n";
    $consulta .= "Enviado el " . date('d/m/y', time());

    $para = 'lues.dw@gmail.com';
    $asunto = 'Este email fue enviado desde Porfolio Lucas Espindola';
    $header = "From: $email\r\n" . "Reply-To: $email\r\n";

    if (mail($para, $asunto, utf8_decode($consulta), $header)) {
        header('Location: exito.html');
        exit;
    } else {
        echo "Hubo un problema al enviar el correo.";
    }
}
?>

