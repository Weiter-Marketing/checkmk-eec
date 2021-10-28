import {getParent} from "./getParent.js";

export const structureLinkObject = ((el) => {
    let link = {
        event: {
            name: 'link-click',
            label: window.location.pathname + '-' + el.innerText,
            category:'link click',
            value:''
        },
        cookie:{
            name:'link-clk',
            value:window.location.pathname + '-' + el.id,
            duration: 30,
            label: window.location.pathname + '-' + btoa(el.innerText),
        },
        attributes:{
            label: el.id,
            event:'click',
            section: getParent(el, 'section'),
            text: el.innerText,
            code: btoa(el.innerText),
        }
    };

    return link;
});