document.addEventListener('DOMContentLoaded', function() {
    const statusElement = document.createElement('div');
    statusElement.style.position = 'fixed';
    statusElement.style.bottom = '20px';
    statusElement.style.right = '20px';
    statusElement.style.padding = '10px';
    statusElement.style.borderRadius = '5px';
    statusElement.style.fontWeight = 'bold';
    document.body.appendChild(statusElement);

    function updateOnlineStatus() {
        if (navigator.onLine) {
            statusElement.textContent = 'Online';
            statusElement.style.backgroundColor = '#4ade80';
            statusElement.style.color = '#ffffff';
        } else {
            statusElement.textContent = 'Offline';
            statusElement.style.backgroundColor = '#f87171';
            statusElement.style.color = '#ffffff';
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus(); 
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevButton = document.getElementById('prevTestimonial');
    const nextButton = document.getElementById('nextTestimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    prevButton.addEventListener('click', prevTestimonial);
    nextButton.addEventListener('click', nextTestimonial);

    
    showTestimonial(currentTestimonial);
   setInterval(nextTestimonial, 5000);

});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });
});