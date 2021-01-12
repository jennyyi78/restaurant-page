import {displayNavbar, displayHomepage} from "./modules/displayHomepage.js";
import displayMenu from "./modules/displayMenu.js";
import displayContact from "./modules/displayContact.js";
import clearPage from "./modules/clearPage.js";

const mainController = (function() {
    displayNavbar();
    displayHomepage();

    const navOptions = document.getElementsByClassName("nav-option");
    const optionFunctions = [displayHomepage, displayMenu, displayContact];

    for (let i = 1; i < navOptions.length; i++) {
        navOptions[i].addEventListener("click", function () {
            clearPage();
            optionFunctions[i - 1]();
            console.log("test");
        });
    }
})();