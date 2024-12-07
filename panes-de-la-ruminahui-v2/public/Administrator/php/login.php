<?php
// Incluir archivo de conexión a la base de datos
require 'db.php';

// Establecer encabezados para respuesta JSON
header('Content-Type: application/json');

// Verificar si se recibieron los datos
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Consulta segura con declaraciones preparadas
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo json_encode([
            "success" => true,
            "message" => "Login exitoso"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Usuario o contraseña incorrectos"
        ]);
    }

    $stmt->close();
} else {
    echo json_encode([
        "success" => false,
        "message" => "Datos incompletos"
    ]);
}

// Cerrar la conexión
$conn->close();
?>
