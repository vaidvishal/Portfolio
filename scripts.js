document.addEventListener('DOMContentLoaded', () => {
    function adjustLayout() {
        const width = window.innerWidth;
        
        if (width > 768) {
            // Desktop layout adjustments
            document.querySelector('header nav ul').style.flexDirection = 'row';
            document.querySelector('.container').style.fontSize = '1.5rem';
            // Add more adjustments as needed
        } else if (width > 480) {
            // Tablet layout adjustments
            document.querySelector('header nav ul').style.flexDirection = 'column';
            document.querySelector('.container').style.fontSize = '1.2rem';
            // Add more adjustments as needed
        } else {
            // Mobile layout adjustments
            document.querySelector('header nav ul').style.flexDirection = 'column';
            document.querySelector('.container').style.fontSize = '1rem';
            // Add more adjustments as needed
        }
    }

    // Adjust layout on initial load
    adjustLayout();

    // Adjust layout on window resize
    window.addEventListener('resize', adjustLayout);
});
