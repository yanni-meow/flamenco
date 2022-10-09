const animItems = document.querySelectorAll('.anim');

const onEntry = (entry) => {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }
    });
}

const observer = new IntersectionObserver(onEntry);

animItems.forEach(item => observer.observe(item));
