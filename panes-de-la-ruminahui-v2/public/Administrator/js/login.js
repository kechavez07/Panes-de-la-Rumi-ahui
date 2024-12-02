const button = document.getElementById('submit-button');

async function onSubmit(event) {
    event.preventDefault(); 
    console.log('entra el submit');
    if (validateUser()) {
        console.log('entra el validateUser');
        button.disabled = true;
        button.textContent = "Signing in...";

        setTimeout(() => {
            button.disabled = false;
            window.location.href = "./html/home.html"; 
        }, 1000);
    } else {
        alert("Invalid credentials! Please try again.");
    }
}

async function validateUser() {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    // concecion de la base de base de datos con usurios
    const formData = new FormData();
    formData.append('user', user);
    formData.append('password', password);

    try {
        const response = await fetch('/path/to/your/php/login.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.json();

        if (result.success) {
            return true;
        }

    } catch (error) {
        console.error('Error:', error);
        return false;
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
