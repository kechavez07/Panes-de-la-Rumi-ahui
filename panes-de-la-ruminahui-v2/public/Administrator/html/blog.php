<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Formulario de Blog</title>
  <link rel="stylesheet" href="../css/estilos.css">
</head>
<body>
  <div class="form-container">
    <!-- Botón de regreso -->
    <button class="back-button" onclick="history.back()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
      </svg>
    </button>
    <!-- Título -->
    <h1>Nueva Entrada de Blog</h1>
    <!-- Contenido del formulario -->
    <form id="blog-form" class="form">
      <div class="form-group">
        <label for="title">Título</label>
        <input type="text" id="title" placeholder="Ingrese el título del blog" required>
      </div>
      <div class="form-group">
        <label for="content">Contenido</label>
        <textarea id="content" placeholder="Escriba el contenido del blog" required></textarea>
      </div>
      <div class="form-group">
        <label for="image">Imagen</label>
        <input type="file" id="image" accept="image/*">
      </div>
      <button type="submit" class="btn">Publicar Entrada</button>
    </form>
  </div>
</body>
</html>
