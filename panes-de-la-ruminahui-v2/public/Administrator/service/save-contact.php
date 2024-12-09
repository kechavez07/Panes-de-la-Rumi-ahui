<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $comment = $data['comment'] ?? '';

    if (empty($name) || empty($email) || empty($comment)) {
        echo json_encode(["error" => "Todos los campos son obligatorios"]);
        exit;
    }

    try {
        $sql = "INSERT INTO contact (name, email, comment) VALUES (:name, :email, :comment)";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':comment', $comment);

        $stmt->execute();

        echo json_encode(["success" => "Datos guardados correctamente"]);
    } catch (PDOException $e) {
        echo json_encode(["error" => $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "Método no permitido"]);
}

$conn = null;
?>
