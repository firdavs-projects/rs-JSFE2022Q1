document.addEventListener('DOMContentLoaded', () => {
    const slider = new ChiefSlider('.slider', {
        autoplay: false,
        // interval: 3000,
        swipe: true,
        loop: false,
    });
});

const sliderControls = document.querySelectorAll('.slider__control');
sliderControls.forEach(control => {
    control.addEventListener('click', () => {
        setCurrentPage();
        setDisabledControls();
    });
});

setCurrentPage();

setDisabledControls();

function setCurrentPage() {
    setTimeout(() => {
        const activeSlides = document.querySelectorAll('.slider__item_active');
        const activeSlidesArray = Array.from(activeSlides);
        const currentPage = Math.ceil((+activeSlidesArray[0].dataset.index + 1) / 4);
        const currentPageEl = document.querySelector('.current-page');
        currentPageEl.textContent = `${currentPage}`;
    }, 300);
}


function setDisabledControls() {
    setTimeout(() => {
        const slides = Array.from(document.querySelectorAll('.slider__item'));
        const activeSlides = Array.from(document.querySelectorAll('.slider__item_active'));
        const prevPageBtn = document.querySelector('.prev-page');
        const nextPageBtn = document.querySelector('.next-page');
        const prevSlideBtn = document.querySelector('.prev-slide');
        const nextSlideBtn = document.querySelector('.next-slide');
        if (slides[0].classList.contains('slider__item_active')) {
            prevPageBtn.classList.add('disabled');
            prevSlideBtn.classList.add('disabled');
        } else {
            prevPageBtn.classList.remove('disabled');
            prevSlideBtn.classList.remove('disabled');
        }
        if (slides[slides.length - 1].classList.contains('slider__item_active')) {
            nextPageBtn.classList.add('disabled');
            nextSlideBtn.classList.add('disabled');
        } else {
            nextPageBtn.classList.remove('disabled');
            nextSlideBtn.classList.remove('disabled');
        }
    }, 300);
}

