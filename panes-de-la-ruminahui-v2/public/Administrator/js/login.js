const button = document.getElementById('submit-button');

async function onSubmit(event) {
    event.preventDefault(); 
    console.log('entra el submit');
    if (await validateUser()) { // Asegúrate de usar "await" aquí
        console.log('entra al if y se  va a home');
        button.disabled = true;
        button.textContent = "Signing in...";

        setTimeout(() => {
            button.disabled = false;
            window.location.href = "./html/home.html"; 
        }, 1000);
    } else {
        alert("Credenciales incorrectas.");
    }
}

async function validateUser() {
    try {
        const user = document.getElementById('user').value;
        const password = document.getElementById('password').value;

        const formData = new FormData();
        formData.append('user', user);
        formData.append('password', password);
        console.log('entra el validateUser');
        console.log(user);
        console.log(password);

        const response = await fetch('php/login.php', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            console.error('Error en la respuesta del servidor:', response.status);
            return false; // Devuelve false si la respuesta no es correcta
        }

        const result = await response.json(); // Asegúrate de que el PHP devuelva JSON

        if (result.success) {
            console.log('Login exitoso:', result.message);
            return true; // Usuario validado correctamente
        } else {
            console.log('Credenciales inválidas:', result.message || 'Sin mensaje');
            return false; // Devuelve false si el login no es exitoso
        }
    } catch (error) {
        console.error('Error al conectarse al servidor:', error);
        return false; // Devuelve false si ocurre un error
    }
}


const user = document.getElementById('user');
const password = document.getElementById('password');
const sqlInjectionPattern = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|EXEC|UNION|OR|AND)\b|--|;|\/\*|\*\/|')/i;

// Al perder el foco en el campo de usuario
user.addEventListener('blur', () => {
    // Si el valor está vacío, agregar la clase 'is-invalid'
    if (user.value.length === 0 || sqlInjectionPattern.test(user.value)) {
        user.classList.add('is-invalid');
    } else {
        user.classList.remove('is-invalid');
    }
});

// Puedes agregar una validación adicional para el campo de contraseña si es necesario
password.addEventListener('blur', () => {
    if (password.value.length === 0) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }
});

document.getElementById('login-form').addEventListener('submit', onSubmit);
