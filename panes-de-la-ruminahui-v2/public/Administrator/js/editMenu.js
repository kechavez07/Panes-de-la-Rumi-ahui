document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form_menu').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Captura los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = document.getElementById('precio').value;
        const categoria = document.getElementById('categoria').value;

        // Crea un objeto con los datos del formulario
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('categoria', categoria);

        // Envía los datos al archivo PHP usando fetch
        fetch('../php/menu.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.includes('success')) {
                window.location.href = "../html/home.html"; // Redirige si la respuesta es exitosa
            }
        })
        .catch(error => console.error('Error:', error));
    });
});