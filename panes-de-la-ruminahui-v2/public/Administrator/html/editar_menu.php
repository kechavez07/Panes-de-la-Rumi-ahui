<?php
$categories = include 'php/get_categories.php';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/estilos.css">
    <title>Editar Menú</title>
</head>
<body>
    <div class="form-container">
        <button class="back-button" onclick="history.back()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
            </svg>
        </button>
        <h1>Editar Menú</h1>
        <form id="form_menu" method="POST" action="php/save_product.php">
            <label for="nombre">Nombre del Producto:</label>
            <input type="text" id="name" name="name">

            <label for="descripcion">Descripción:</label>
            <textarea id="description" name="description" rows="3"></textarea>

            <label for="precio">Precio (USD):</label>
            <input type="number" id="price" name="price" step="0.01">

            <label for="categoria">Categoría:</label>
            <select id="id_category" name="id_category">
                <option value="">Seleccionar</option>
                <?php foreach ($categories as $row): ?>
                    <option value="<?= htmlspecialchars($row['id_category']) ?>">
                        <?= htmlspecialchars($row['name']) ?>
                    </option>
                <?php endforeach; ?>
            </select>

            <button type="submit" class="btn" id="submit-button">Guardar Cambios</button>
        </form>
    </div>
    <!-- <script src="../js/validar_menu.js" defer></script>
    <script src="../js/editMenu.js"></script> -->
</body>
</html>
