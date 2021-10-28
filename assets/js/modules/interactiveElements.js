export const interactiveElements = ((a) => {
    let arr = [];

    let step = document.querySelector('.step-navigation-item.active span').innerText;
    let faqs = document.querySelectorAll('.accordion__item');
    let slider = document.querySelectorAll('.image-slider__navigation*');

    arr.push(step);
    arr.push(faqs);
    arr.push(slider);

    return arr;
});