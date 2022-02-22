const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide');
console.log(mainSlide);

const slidesCount = mainSlide.querySelectorAll('div').length; // это значение - массив, поэтому берем блину
console.log(slidesCount);

let activeSlideIndex = 0; // Переменная для того, чтобы понимать, какой слайд сейчас активный

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`; 

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide(direction) {
    if (direction == 'up') {
        activeSlideIndex++
        // console.log(activeSlideIndex);
        // console.log(mainSlide);
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction == 'down') {
        activeSlideIndex--
        console.log(activeSlideIndex);
        console.log(mainSlide);
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight
    console.log(height)

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}