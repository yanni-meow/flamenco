const spoilers = document.querySelectorAll('.faq_header');

spoilers.forEach(header => {
    header.addEventListener('click', () => {
        header.nextElementSibling.classList.toggle('hidden');
    })
})