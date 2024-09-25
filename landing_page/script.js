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
    updateOnlineStatus(); // Initial check
});