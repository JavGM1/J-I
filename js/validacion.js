document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-registro');
    const emailInput = document.getElementById('registerEmail');
    const passwordInput = document.getElementById('registerPassword');
    const errorDiv = document.getElementById('registro-error');

    if (form) {
        form.addEventListener('submit', function (e) {
            errorDiv.textContent = '';
            let valid = true;

            // Validar email
            const email = emailInput.value.trim();
            const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                errorDiv.textContent = 'El correo debe tener formato aaaa@aaa.com';
                valid = false;
            }

            // Validar contraseña
            const password = passwordInput.value;
            if (password.length < 6) {
                errorDiv.textContent += (errorDiv.textContent ? '\n' : '') + 'La contraseña debe tener al menos 6 caracteres.';
                valid = false;
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }
});