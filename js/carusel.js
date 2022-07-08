const sliderList = document.querySelectorAll('.slider__item');
const sliderBtn = document.querySelector('.slider__btn');
let count = 0;



document.addEventListener('click',(elem) => {
    if (elem.target.className === 'slider__btn slider__btn-next') {
        sliderList[count + 1].classList.add('slider__item-active');
        setTimeout(()=> {
            sliderList[count - 1].classList.remove('slider__item-active');            
        }, 100);
        count++;
    }
    if (elem.target.className === 'slider__btn slider__btn-prev') {
        sliderList[count - 1].classList.add('slider__item-active');
        setTimeout(() => {
            sliderList[count + 1].classList.remove('slider__item-active');
        },100);
        count--;
    }
});




