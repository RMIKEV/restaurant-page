const menu = ()=>{
const content = document.querySelector("#content");
content.classList.add("menubar");
const divs = ['div1', 'div2', 'div3', 'div4'];
divs.forEach((ele)=>{
    const div = document.createElement("div");
    div.id = ele;
    div.classList.add("menubar");
    content.appendChild(div);
});

div1.textContent = "MENU";
content.appendChild(div1);

const tradHeading = document.createElement("h4");
tradHeading.textContent = "TRADITIONAL";
div2.appendChild(tradHeading);
const tradPara = document.createElement("p");
tradPara.textContent = "Espresso, Macchiato, Cappuccihno";
div2.appendChild(tradPara);
content.appendChild(div2);


const coffeeNtea = document.createElement("h4");
coffeeNtea.textContent = "COFFEE & TEA";
div3.appendChild(coffeeNtea);
const coffeeNteaPara = document.createElement("p");
coffeeNteaPara.textContent = "Drip Coffe, Cold Brew, Ice Tea, Chai";
div3.appendChild(coffeeNteaPara);
content.appendChild(div3);

const extras = document.createElement("h4");
extras.textContent = "EXTRAS";
div4.appendChild(extras);
const extrasPara = document.createElement("p");
extrasPara.textContent = "Extra Shot, Almond Milk, Oat Milk";
div4.appendChild(extrasPara);
content.appendChild(div4);
};
import "./menu.css";
export {menu};

