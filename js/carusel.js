const btnNext = document.querySelector(".slider__btn-next");
const btnPrev = document.querySelector(".slider__btn-prev");

const size = document.querySelector(".slider").clientWidth;
const amountItems = document.querySelectorAll(".slider__item").length;
const shiftSize = size * amountItems;
let count = 0;

console.log(size);


const sliderContainer = document.querySelector(".slider__container");

btnNext.addEventListener("click", ()=> {
    if (count < amountItems - 1) {
        count++;
        sliderContainer.style.transform = `translateX(${-size * count}px)`;
        console.log(count)
    }  
});


btnPrev.addEventListener("click", () => {
    if (count > 0) {
        count--;
        sliderContainer.style.transform = `translateX(${-size * count}px)`;
    }  
});








