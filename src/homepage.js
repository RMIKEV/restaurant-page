const homepage = () => {
    const content = document.querySelector("#content");
    const divs = ['div1', 'div2', 'div3', 'div4'];
    divs.forEach((ele) => {
        const div = document.createElement("div");
        div.id = ele;
        content.appendChild(div);
    });

    div1.classList.add("heading");
    const h1 = document.createElement("h1");
    h1.textContent = "RMIEKV'S LATTE";
    div1.appendChild(h1);

    div2.classList.add("intro");
    const p = document.createElement("p");
    p.textContent = `Rmikev's latte has the finest ! The atmosphere and the sitting bring your all best memories back!
                                    This is exactly a kind of place where I would like to return again and again.`;
    div2.appendChild(p);

    div3.classList.add("timings");
    const hourheading = document.createElement("h2");
    hourheading.textContent = "Hours";
    const ul = document.createElement("ul");
    const timings = ['Sun', 'Mon'];
    timings.forEach((ele) => {
        const li = document.createElement("li");
        let textNode = 0;
        if (ele === 'Sun')
            textNode = document.createTextNode( `Sat-Sun: 8am - 6pm`);

        else
            textNode = document.createTextNode(`Mon-Fri: 8am - 10pm`);

        li.appendChild(textNode);
        ul.appendChild(li);
    });
    div3.appendChild(hourheading);
    div3.appendChild(ul);

    div4.classList.add("location");
    const locationHeading = document.createElement("h2");
    locationHeading.textContent = "Location";
    const locationPara = document.createElement("p");
    locationPara.textContent = "123 Forest Drive, Forestville, Maine";
    div4.appendChild(locationHeading);
    div4.appendChild(locationPara);
};


export { homepage };