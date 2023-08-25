
<?php
// Conecto con mi form / name / con el server a traves de lo name

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$consulta = $_POST['consulta'];

// $header .= "Content-Type text/plain";

// Como va a llegar el cuerpo del email a mi

$consulta = "Este mensaje fue enviado por" . $nombre . ",\r\n";
$consulta .= "Su email es: " . $email . "\r\n"; 
$consulta .= "Su telefono es: " . $telefono . "\r\n";
$consulta .= "Consulta: " . $_POST['consulta'] . "\r\n";
$consulta .= "Enviado el " . date('d/m/y', time());


$para = 'lues.dw@gmail.com';
$asunto = 'Este email fuen enviado desde Porfolio Lucas Espindola';

// Funcion mail 
// A quien le va allegar ese email
mail($para, $asunto, utf8_decode($consulta), $header);

// Redirecciona al enviar el formulario 
header('Location:exito.html');
?>


