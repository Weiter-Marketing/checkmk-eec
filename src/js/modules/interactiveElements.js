export const interactiveElements = ((a) => {
    let arr = [];

    let step = document.querySelector('.step-navigation-item.active span').innerText;
    let faqs = document.querySelectorAll('.accordion__item');
    let slider = document.querySelectorAll('.image-slider__navigationb*');

    if(step) {
        arr.push(step);
    }
    if(faqs) {
        arr.push(faqs);
    }
    if(slider) {
        arr.push(slider);
    }

    return arr;
});