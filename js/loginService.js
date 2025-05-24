document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alertBuilder('danger', 'Todos los campos son obligatorios.');
        return;
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        alertBuilder('danger', 'Correo electrónico no es válido.');
        return;
    }

    console.log('Enviando petición de login...');

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            // username: 'emilys',
            // password: 'emilyspass',
            // username: email,
            // password: password,
            expiresInMins: 30
        }),
    })
        .then(res => {
            console.log('Respuesta recibida:', res);
            return res.json();
        })
        .then(data => {
            console.log('Datos del login:', data);
        })
        .catch(error => {
            console.error('Error al hacer login:', error);
        });
    
});

function alertBuilder(alertType, message) {
    const alert = `<div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
  </div>`;
    document.getElementById('mensaje').innerHTML = alert;
}