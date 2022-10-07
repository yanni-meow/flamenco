const openBtn = document.querySelector('.header_open_menu');
const menu = document.querySelector('.menu_box');
const items = document.querySelectorAll('.menu_list_item');
const blur = document.querySelector('.blur');

menu.addEventListener('wheel', (event) => event.preventDefault());
menu.addEventListener('touchmove', (event) => event.preventDefault());

openBtn.addEventListener('click', function () {
    menu.classList.remove('hidden');
    blur.classList.remove('hidden');
})

items.forEach(el => {
    el.addEventListener('click', () => {
        menu.classList.add('hidden')
        document.querySelector('.blur').classList.add('hidden')
    });
})
