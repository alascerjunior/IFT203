document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetPageId = button.getAttribute('data-target');
            navigateTo(targetPageId);
        });
    });
});

function navigateTo(pageId) {
    const pages = document.querySelectorAll('.page');
    const navButtons = document.querySelectorAll('.nav-btn');

    // Deactivate all sections and header links
    pages.forEach(page => page.classList.remove('active'));
    navButtons.forEach(btn => btn.classList.remove('active'));

    // Activate selected section
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Highlight corresponding navbar item
    const targetButton = document.querySelector(`.nav-btn[data-target="${pageId}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
}
