document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('groupRegistrationForm');
    const numMembersInput = document.getElementById('numMembers');
    const teamMembersContainer = document.getElementById('teamMembersContainer');

    numMembersInput.addEventListener('change', updateTeamMembersFields);

    function updateTeamMembersFields() {
        const numMembers = parseInt(numMembersInput.value) - 1; // Subtract 1 for the leader
        teamMembersContainer.innerHTML = ''; // Clear existing fields

        for (let i = 0; i < numMembers; i++) {
            const memberDiv = document.createElement('div');
            memberDiv.className = 'form-group';
            memberDiv.innerHTML = `
                <label for="memberName${i}">Team Member ${i + 1} Name (required)</label>
                <input type="text" id="memberName${i}" name="memberName${i}" required>
                <label for="memberEmail${i}">Team Member ${i + 1} Email (required)</label>
                <input type="email" id="memberEmail${i}" name="memberEmail${i}" required>
            `;
            teamMembersContainer.appendChild(memberDiv);
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            console.log('Form data:', data);
            alert('Form submitted successfully!');
            // Here you would typically send the data to a server
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                showError(field, 'This field is required');
            } else {
                clearError(field);
            }
        });

        const emailFields = form.querySelectorAll('input[type="email"]');
        emailFields.forEach(field => {
            if (field.value && !isValidEmail(field.value)) {
                isValid = false;
                showError(field, 'Please enter a valid email address');
            }
        });

        return isValid;
    }

    function showError(field, message) {
        clearError(field);
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = message;
        field.parentNode.appendChild(error);
        field.classList.add('invalid');
    }

    function clearError(field) {
        const error = field.parentNode.querySelector('.error');
        if (error) {
            error.remove();
        }
        field.classList.remove('invalid');
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Initialize team members fields
    updateTeamMembersFields();
});