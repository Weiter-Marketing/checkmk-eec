import {getParent} from "./getParent.js";

export const structureSectionObject = ((el) => {
    let section = {
        attributes:{
            section: el.classList[0],
        }
    };

    return section;
});