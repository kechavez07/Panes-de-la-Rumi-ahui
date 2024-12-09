<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include 'db.php';

$table = $_GET['table'] ?? '';
$allowedTables = ["product", "category", "promotion", "review", "partner", "blog"];

if (!in_array($table, $allowedTables)) {
    echo json_encode(["error" => "Tabla no permitida"]);
    exit;
}

try {
    $sql = "SELECT * FROM $table";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}

$conn = null;
?>
