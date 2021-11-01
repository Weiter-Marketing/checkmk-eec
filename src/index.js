import {structureButtonObject} from "./js/modules/structureButtonObject.js";
import {structureLinkObject} from "./js/modules/structureLinkObject.js";
import {structureSectionObject} from "./js/modules/structureSectionObject.js";
import {tagElementWithDataAttributes} from "./js/modules/tagElementWithAttributes.js";
import {interactiveElements} from './js/modules/interactiveElements.js';

let buttons = document.querySelectorAll('.btn');
let navLinks = document.querySelectorAll('.nav-link');
let sections = Array.from(document.getElementsByTagName('section'));
let anchors = Array.from(document.getElementsByTagName('a'));

if(sections.length) {
    sections.forEach((section) => {
        let sectionObj = structureSectionObject(section);
        tagElementWithDataAttributes(section, sectionObj);
    });
};

if(buttons.length) {
    buttons.forEach((button) => {
        let btnObj = structureButtonObject(button);
        tagElementWithDataAttributes(button, btnObj);
    });
};

if(navLinks.length) {
    navLinks.forEach((navLink) => {
        let linkObj = structureLinkObject(navLink);
        tagElementWithDataAttributes(navLink, linkObj);
    });
};

if(anchors.length) {
    anchors.forEach((anchor) => {
        let anchorObj = structureLinkObject(anchor);
        tagElementWithDataAttributes(anchor, anchorObj);
    });
};
//
// if(interactiveElements.length) {
//     interactiveElements.forEach((anchor) => {
//         debugger;
//         let anchorObj = structureLinkObject(anchor);
//         tagElementWithDataAttributes(anchor, anchorObj);
//     });
// };