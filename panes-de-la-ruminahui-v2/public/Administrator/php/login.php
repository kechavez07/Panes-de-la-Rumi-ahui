<?php
// Incluir archivo de conexión
include 'db.php';

// Establecer encabezados para respuesta JSON
header('Content-Type: application/json');

// Verificar si se recibieron datos
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['user']) && isset($_POST['password'])) {
    // Eliminar espacios en blanco adicionales
    $username = trim($_POST['user']);
    $password = trim($_POST['password']);

    try {
        // Consulta segura usando prepared statements
        $stmt = $conn->prepare("SELECT password FROM users WHERE username = :username");
        $stmt->bindParam(':username', $username, PDO::PARAM_STR);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // Verificar la contraseña directamente (sin cifrado)
            if ($password === $row['password']) { // Comparación directa
                echo json_encode([
                    "success" => true,
                    "message" => "Login exitoso"
                ]);
            } else {
                echo json_encode([
                    "success" => false,
                    "message" => "Contraseña incorrecta"
                ]);
            }
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Usuario no encontrado"
            ]);
        }
    } catch (PDOException $e) {
        echo json_encode([
            "success" => false,
            "message" => "Error en la consulta: " . $e->getMessage()
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "Datos incompletos"
    ]);
}
?>
