document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const eyeIcon = togglePassword.querySelector('.eye-icon');
    const eyeOffIcon = togglePassword.querySelector('.eye-off-icon');

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@kkwagh\.edu\.in$/;
        return regex.test(email);
    }

    emailInput.addEventListener('input', function() {
        if (!validateEmail(this.value)) {
            emailError.textContent = 'Email must be in the format example@kkwagh.edu.in';
        } else {
            emailError.textContent = '';
        }
    });

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        eyeIcon.classList.toggle('hidden');
        eyeOffIcon.classList.toggle('hidden');
    });
});
