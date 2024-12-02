<?php
// Datos de conexión
inport 'db.php';

// Captura los datos enviados desde el formulario
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$precio = $_POST['precio'];
$categoria = $_POST['categoria'];

// Inserta los datos en la base de datos
$sql = "INSERT INTO menu (nombre, descripcion, precio, categoria) VALUES ('$nombre', '$descripcion', '$precio', '$categoria')";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>