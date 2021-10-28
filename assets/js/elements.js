import {structureButtonObject} from "./modules/structureButtonObject.js";
import {structureLinkObject} from "./modules/structureLinkObject.js";
import {structureSectionObject} from "./modules/structureSectionObject.js";
import {tagElementWithDataAttributes} from "./modules/tagElementWithAttributes.js";
import {interactiveElements} from './modules/interactiveElements.js';

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