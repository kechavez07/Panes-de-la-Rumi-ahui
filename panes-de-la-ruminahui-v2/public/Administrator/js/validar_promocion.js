document.getElementById('form_promocion').addEventListener('submit', function (event) {
    const nombrePromo = document.getElementById('nombre_promo').value.trim();
    const descripcionPromo = document.getElementById('descripcion_promo').value.trim();
    const descuento = document.getElementById('descuento').value.trim();
    const fechaInicio = document.getElementById('fecha_inicio').value.trim();
    const fechaFin = document.getElementById('fecha_fin').value.trim();

    if (!nombrePromo) {
        alert('El nombre de la promoción es obligatorio.');
        event.preventDefault();
        return;
    }
    if (!descripcionPromo) {
        alert('La descripción es obligatoria.');
        event.preventDefault();
        return;
    }
    if (!descuento || isNaN(descuento) || descuento < 0 || descuento > 100) {
        alert('El descuento debe ser un número entre 0 y 100.');
        event.preventDefault();
        return;
    }
    if (!fechaInicio) {
        alert('La fecha de inicio es obligatoria.');
        event.preventDefault();
        return;
    }
    if (!fechaFin) {
        alert('La fecha de fin es obligatoria.');
        event.preventDefault();
        return;
    }
    if (fechaInicio > fechaFin) {
        alert('La fecha de inicio no puede ser posterior a la fecha de fin.');
        event.preventDefault();
        return;
    }

    alert('Formulario enviado correctamente.');
});
// JavaScript Document