<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Partner</title>
    <link rel="stylesheet" href="../css/estilos.css">
</head>
<body>
    <div class="form-container">
        <form class="partner-form">
            <button class="back-button" onclick="history.back()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
                </svg>
              </button>
            <h1>Registro de Partner</h1>
            <div class="form-item">
                <label for="name" class="form-label">Nombre del Partner</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre de tu empresa"
                    class="form-input"
                />
                <span class="form-message"></span>
            </div>
            <div class="form-item">
                <label for="logo" class="form-label">Logo</label>
                <input
                    type="file"
                    id="logo"
                    name="logo"
                    accept=".jpg,.png,.webp"
                    class="form-input"
                />
                <span class="form-message"></span>
            </div>
            <button type="submit" class="btn">Enviar</button>
        </form> 
    </div>
</body>
</html>
