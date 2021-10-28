export const getParent = ((el, tagName) => {
    tagName = tagName.toLowerCase();

    while (el && el.parentNode) {
        el = el.parentNode;
        if (el.tagName && el.tagName.toLowerCase() === tagName) {
            return el.classList[0];
        }
    }
    return null;
});