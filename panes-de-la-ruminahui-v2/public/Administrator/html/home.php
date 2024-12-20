<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu Desplegable</title>
  <link rel="stylesheet" href="../css/home.css">
</head>
<body>
  <div class="main-container">
    <div class="menu-container">
      <button class="menu-toggle" id="menu-toggle">
        &#9776;
      </button>
      <div class="menu" id="menu">
        <div class="profile">
          <img class="avatar" src="https://github.com/shadcn.png" alt="Avatar">
          <div class="profile-info">
            <h2>Carlos Nombre</h2>
            <p>carlos@ejemplo.com</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Perfil</a></li>
            <li>
              <a href="#">Configuración</a>
              <!-- Submenú para configuración -->
              <ul class="submenu">
                <li><a href="editar_menu.php">Editar Menú</a></li>
                <li><a href="editar_promocion.php">Editar Promoción</a></li>
              </ul>
            </li>
            <li><a href="#">Cerrar Sesión</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="container">
      <h1 class="title">Escoje una hermaienta de administración</h1>
      <div class="grid">
        <div class="card">
          <div class="card-header">
            <img src="../img/menu.jpg" alt="Cámara DSLR" class="card-image">
            <h2 class="card-title">Editar Menú</h2>
            <p class="card-description"></p>
          </div>
          <div class="card-footer">
            <a href="editar_menu.php" class="button">Ir</a>
          </div>
        </div>
        <div class="grid">
          <div class="card">
            <div class="card-header">
              <img src="../img/promocion.jpg" alt="Cámara DSLR" class="card-image">
              <h2 class="card-title">Editar Promoción</h2>
              <p class="card-description"></p>
            </div>
            <div class="card-footer">
              <a href="editar_promocion.php" class="button">Ir</a>
            </div>
          </div>
          <div class="grid">
            <div class="card">
              <div class="card-header">
                <img src="../img/promocion.jpg" alt="Cámara DSLR" class="card-image">
                <h2 class="card-title">Añadir una nueva entra del Blog</h2>
                <p class="card-description"></p>
              </div>
              <div class="card-footer">
                <a href="blog.php" class="button">Ir</a>
              </div>
            </div>
            <div class="grid">
            <div class="card">
              <div class="card-header">
                <img src="../img/promocion.jpg" alt="Cámara DSLR" class="card-image">
                <h2 class="card-title">Añadir un nuevo Partner </h2>
                <p class="card-description"></p>
              </div>
              <div class="card-footer">
                <a href="partner.php" class="button">Ir</a>
              </div>
            </div>
        <!-- Repite esta estructura para los demás productos -->
      </div>
    </div>
  </div>

</body>
</html>
