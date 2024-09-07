// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el formulario
    const form = document.getElementById('contact-form');

    // Añadir un evento para manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado de envío

        // Obtener los valores de los campos
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validar que todos los campos estén llenos
        if (name === '' || email === '' || message === '') {
            alert('Por favor, completa todos los campos.');
        } else {
            alert('Formulario enviado exitosamente. ¡Gracias por tu mensaje, ' + name + '!');
            form.reset(); // Reiniciar el formulario después de enviar
        }
    });
});
