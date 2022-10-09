const modals = document.querySelectorAll('.pop-up');

// modal windows can't be scrolled
modals.forEach(modal => {
    modal.addEventListener('wheel', (event) => event.preventDefault());
    modal.addEventListener('touchmove', (event) => event.preventDefault());
});

// modal windows closes with data-value of close btn
const closeBtns = document.querySelectorAll('.pop-up_close');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modals.forEach(modal => {
            if (modal.classList.contains(btn.dataset.value) || modal.classList.contains('blur')) modal.classList.add('hidden')
        })
    })
});

// to open pop up when client going to leave website
const showExitIntentPopUp = () => {
    document.querySelector('.exit_intent').classList.remove('hidden');
    document.querySelector('.blur').classList.remove('hidden');
};

// if desktop
const mouseEvent = e => {
    if (!e.toElement && !e.relatedTarget) {
        document.removeEventListener('mouseout', mouseEvent);
        showExitIntentPopUp();
    }
};

document.addEventListener('mouseout', mouseEvent);

// browser 'back' button
const onHistoryBack = () => {
    if (window.history.state === 'forward') {
        window.removeEventListener('popstate', onHistoryBack);
        showExitIntentPopUp();
    }
};

if (window.history && window.history.pushState) {
    window.history.pushState('forward', null, './');
    window.addEventListener('popstate', onHistoryBack);
}

// scroll to top
const negativeScrollHeight = document.body.scrollHeight / 20;
let lastScrollTop = 0,
    maxScrollTop = 0;

const scrollEvent = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > maxScrollTop) maxScrollTop = scrollTop;
    if ((maxScrollTop - scrollTop) > negativeScrollHeight) {
        document.removeEventListener('scroll', scrollEvent);
        showExitIntentPopUp();
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
};

document.addEventListener('scroll', scrollEvent);