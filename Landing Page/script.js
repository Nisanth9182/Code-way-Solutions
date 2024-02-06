// JavaScript to toggle visibility of sections based on navigation click
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.about-section, .projects-section, .contact-section').forEach(section => {
            section.style.display = 'none';
        });

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).style.display = 'block';
    });
});
