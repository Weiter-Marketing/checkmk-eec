export const tagElementWithDataAttributes = ((el, obj) =>{
    let properties = Object.getOwnPropertyNames(obj.attributes);

    properties.forEach((property)=>{
        el.setAttribute('data-' + property, obj.attributes[property])
    })
    return el;
});
