import {structureButtonObject} from "./js/modules/structureButtonObject.js";
import {structureLinkObject} from "./js/modules/structureLinkObject.js";
import {structureSectionObject} from "./js/modules/structureSectionObject.js";
import {tagElementWithDataAttributes} from "./js/modules/tagElementWithAttributes.js";
import {interactiveElements} from './js/modules/interactiveElements.js';

let buttons = document.querySelectorAll('.btn');
let navLinks = document.querySelectorAll('.nav-link');
let sections = Array.from(document.getElementsByTagName('section'));
let anchors = Array.from(document.getElementsByTagName('a'));

sections.forEach((section) => {
    let sectionObj = structureSectionObject(section);
    tagElementWithDataAttributes(section, sectionObj);
});

buttons.forEach((button) => {
    let btnObj = structureButtonObject(button);
    tagElementWithDataAttributes(button, btnObj);
});

navLinks.forEach((navLink) => {
    let linkObj = structureLinkObject(navLink);
    tagElementWithDataAttributes(navLink, linkObj);
});

anchors.forEach((anchor) => {
    let anchorObj = structureLinkObject(anchor);
    tagElementWithDataAttributes(anchor, anchorObj);
});

interactiveElements.forEach((anchor) => {
    debugger;
    let anchorObj = structureLinkObject(anchor);
    tagElementWithDataAttributes(anchor, anchorObj);
});