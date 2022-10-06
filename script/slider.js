const photos = document.querySelectorAll('.photo');
const photosControls = document.querySelectorAll('.photo_radio');

const reviews = document.querySelectorAll('.feedback_item');
const reviewsControls = document.querySelectorAll('.feedback_radio');

const createListeners = (slides, controls, name) => {
    slides.forEach(slide => {
        let event,
            action;

        slide.addEventListener("touchstart", (e) => event = e);

        slide.addEventListener("touchmove", (e) => {
            if (!event) return

            if ((e.touches[0].screenX - event.touches[0].screenX) < 0) action = 'next'
            if ((e.touches[0].screenX - event.touches[0].screenX) > 0) action = 'prev'
        });

        slide.addEventListener("touchend", () => {
            if (!action) return

            const currentSlide = Number(slide.dataset['value']);

            if (action === 'next') {
                if (slides.length === currentSlide) {
                    controls.forEach(control => {
                        if (control.id === `${name}-1`) control.checked = true
                    })
                } else {
                    controls.forEach(control => {
                        if (control.id === `${name}-${currentSlide + 1}`) control.checked = true
                    })
                }
            }

            if (action === 'prev') {
                if (currentSlide === 1) {
                    controls.forEach(control => {
                        if (control.id === `${name}-${slides.length}`) control.checked = true
                    })
                } else {
                    controls.forEach(control => {
                        if (control.id === `${name}-${currentSlide - 1}`) control.checked = true
                    })
                }
            }
        });
    })
};

createListeners(photos, photosControls, 'photo');
createListeners(reviews, reviewsControls, 'feedback');
