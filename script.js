document.addEventListener('DOMContentLoaded', () => {
    const loadingPage = document.getElementById('loadingPage');
    const bappaFeet = document.getElementById('bappaFeet');
    const mainContent = document.getElementById('mainContent');

    bappaFeet.addEventListener('click', () => {
        loadingPage.style.transform = 'translateY(100%)';

        setTimeout(() => {
            mainContent.style.display = 'flex';
            mainContent.style.transform = 'scale(1)';
            mainContent.classList.add('active'); 
        }, 1000); 
    });
});