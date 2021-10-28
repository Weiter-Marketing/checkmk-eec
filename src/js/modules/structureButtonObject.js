import {getParent} from "./getParent.js";

export const structureButtonObject = ((el) => {
    let button = {
        event: {
            name: 'cta-click',
            label: window.location.pathname + '-' + el.id,
            category:'CTA click',
            value:''
        },
        cookie:{
            name:'btn-clk',
            value:window.location.pathname + '-' + el.id,
            duration: 30
        },
        attributes:{
            label: el.id,
            event:'click',
            section: getParent(el, 'section'),
            text: el.innerText
        }
    };

    return button;
});