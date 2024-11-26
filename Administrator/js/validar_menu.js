document.getElementById('form_menu').addEventListener('submit', function (event) {
    const nombre = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const precio = document.getElementById('precio').value.trim();
    const categoria = document.getElementById('categoria').value.trim();

    if (!nombre) {
        alert('El nombre del producto es obligatorio.');
        event.preventDefault();
        return;
    }
    if (!descripcion) {
        alert('La descripción es obligatoria.');
        event.preventDefault();
        return;
    }
    if (!precio || isNaN(precio) || precio <= 0) {
        alert('El precio debe ser un número válido mayor que 0.');
        event.preventDefault();
        return;
    }
    if (!categoria) {
        alert('Debe seleccionar una categoría.');
        event.preventDefault();
        return;
    }

    alert('Formulario enviado correctamente.');
});
// JavaScript Document