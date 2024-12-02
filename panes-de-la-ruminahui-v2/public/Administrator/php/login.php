<?php
// Datos de conexión
inport 'db.php';

// Obtener datos del formulario
$user = $_POST['username'];
$pass = $_POST['password'];

// Consulta para verificar las credenciales
$sql = "SELECT * FROM usuarios WHERE username = '$user' AND password = '$pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Usuario encontrado
    echo "Login exitoso";
} else {
    // Usuario no encontrado
    echo "Usuario o contraseña incorrectos";
}

// Cerrar conexión
$conn->close();
?>