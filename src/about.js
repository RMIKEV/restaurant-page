const about = () => {
    const content = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "ABOUT US";
    heading.classList.add("heading");
    content.appendChild(heading);
    const p = document.createElement("p");
    p.classList.add("para");
    p.textContent = `At Rmikev's Latte, we believe great coffee should feel like home — cozy, comforting, and crafted with care. What started as a passion for the perfect latte turned into a journey to bring people together over handcrafted drinks made with love, quality ingredients, and a touch of everyday magic.
    Whether you're stopping in for your morning pick-me-up or lingering over a late-afternoon latte, we’re here to serve more than just coffee. We’re building a space where community brews, creativity flows, and every cup tells a story.
    Welcome to Rmikev’s Latte. Come for the coffee, stay for the vibe.`;
    content.appendChild(p);
};
import "./about.css";
export {about};
