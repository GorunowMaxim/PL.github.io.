const accordion = document.querySelectorAll('.info-accordion');

accordion.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active');
    })
}) 