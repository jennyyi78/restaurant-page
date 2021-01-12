const displayNavbar = function () {
    const mainContainer = document.querySelector(".main-container");

    const navbar = document.createElement("nav");
    navbar.classList.toggle("navbar");

    const navList = document.createElement("ul");
    navList.classList.toggle("nav-list");

    const listText = ["Kitsune", "Home", "Menu", "Contact"];

    listText.forEach(function (item) {
        const listElement = document.createElement("li");
        listElement.classList.toggle("nav-option");

        if (item === "Kitsune") {
            listElement.classList.toggle("title");
        }

        const innerText = document.createTextNode(item);
        listElement.appendChild(innerText);
        navList.appendChild(listElement);
    });

    navbar.appendChild(navList);
    mainContainer.appendChild(navbar);
}

const displayHomepage = function () {
    const mainContainer = document.querySelector(".main-container");

    const mainBanner = document.createElement("div");
    mainBanner.classList.toggle("main-banner");
    const bannerText = document.createElement("p");
    bannerText.classList.toggle("banner-text");
    const bannerInnerText = document.createTextNode("An Authentic Japanese Dining Experience");

    bannerText.appendChild(bannerInnerText);
    mainBanner.appendChild(bannerText);

    const footer = document.createElement("div");
    footer.classList.toggle("footer");
    const footerText = document.createElement("p");
    footerText.classList.toggle("footer-text");
    const footerInnerText = document.createTextNode("Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit.")

    footerText.appendChild(footerInnerText);
    footer.appendChild(footerText);

    mainContainer.appendChild(mainBanner);
    mainContainer.appendChild(footer);

};

export {
    displayNavbar,
    displayHomepage
}