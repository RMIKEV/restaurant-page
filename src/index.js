import "./style.css";
import { homepage } from "./homepage";
homepage();

import {menu} from "./menu";
import {about} from "./about";
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const abouBtn = document.querySelector(".about");
const content = document.querySelector("#content");

homeBtn.addEventListener("click", ()=>{
    content.textContent = " ";
    content.classList.remove("menubar");
    homepage();
});
menuBtn.addEventListener("click", ()=>{
    content.textContent = " ";
    menu();
});
abouBtn.addEventListener("click", ()=>{
    content.textContent = " ";
    content.classList.remove("menubar");
    about();
});



