<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $description = isset($_POST['description']) ? trim($_POST['description']) : '';
    $price = isset($_POST['price']) ? floatval($_POST['price']) : null;
    $id_category = isset($_POST['id_category']) ? intval($_POST['id_category']) : null;

    if (empty($name) || $price === null) {
        echo "Error: Todos los campos obligatorios deben completarse.";
        exit;
    }

    try {
        $sql = "INSERT INTO product (name, description, price, id_category) 
                VALUES (:name, :description, :price, :id_category)";

        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':name', $name, PDO::PARAM_STR);
        $stmt->bindParam(':description', $description, PDO::PARAM_STR);
        $stmt->bindParam(':price', $price, PDO::PARAM_STR);
        $stmt->bindParam(':id_category', $id_category, PDO::PARAM_INT);

        if ($stmt->execute()) {
            echo "Producto agregado correctamente.";
        } else {
            echo "Error al agregar el producto.";
        }
    } catch (PDOException $e) {
        echo "Error en la base de datos: " . $e->getMessage();
    } finally {
        $conn = null;
    }
} else {
    echo "Acción no permitida.";
}
?>
