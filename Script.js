document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#nav-links a');
    const contentSection =document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetID = link.dataset.content; 

            const currentActive = document.querySelector('.section.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }

            const targetContent = document.getElementById(targetID);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

    function gotoLink(link) {
        console.log(link.value);
        window.open(link.value);
    };



