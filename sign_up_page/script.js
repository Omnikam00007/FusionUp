document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const toast = document.getElementById('toast');
    const loginLink = document.getElementById('loginLink');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        if (!email.endsWith('@kkwagh.edu.in')) {
            showToast('Please use your KKWAGH college email address.', 'error');
            return;
        }

        // Here you would typically send the data to your backend
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        showToast('Signup Successful! Your account has been created.', 'success');
        form.reset();
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        showToast('Login functionality not implemented yet.', 'info');
    });

    function showToast(message, type) {
        toast.textContent = message;
        toast.style.backgroundColor = getToastColor(type);
        toast.style.display = 'block';

        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }

    function getToastColor(type) {
        switch(type) {
            case 'error':
                return '#ef4444';
            case 'success':
                return '#22c55e';
            case 'info':
                return '#3b82f6';
            default:
                return '#2563eb';
        }
    }
});