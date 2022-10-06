const openBtn = document.querySelector('.header_open_menu');
const closeBtn = document.querySelector('.menu_close');
const menu = document.querySelector('.menu_box');
const items = document.querySelectorAll('.menu_list_item');

menu.addEventListener('wheel', (event) => event.preventDefault());
menu.addEventListener('touchmove', (event) => event.preventDefault());

openBtn.addEventListener('click', function () {
    menu.classList.remove('hidden')
})

const handleClose = () => menu.classList.add('hidden')
closeBtn.addEventListener('click', handleClose)
items.forEach(el => {
    el.addEventListener('click', handleClose)
})
