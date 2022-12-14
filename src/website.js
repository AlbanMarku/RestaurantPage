import style from "./style.css"
import logo from "./pics/food.svg"
import createHome from "./homeContent"
import createMenu from "./menuContent"
import createContact from "./contactContent"
import gitLogo from "../dist/pics/logo.png"

function createFooter() {
    const footerArea = document.createElement("footer");
    const nameText = document.createElement("strong");
    const linkText = document.createElement("a");
    const logoImg = document.createElement("img");

    nameText.textContent = "AlbanMarku";
    footerArea.appendChild(nameText);

    linkText.href = "https://github.com/AlbanMarku";
    logoImg.src = gitLogo;
    linkText.appendChild(logoImg);
    footerArea.appendChild(linkText);
    
    return footerArea
}

function createHeader() {
    const headerArea = document.createElement("header");
    const titleText = document.createElement("h1");
    const imgElement = document.createElement("img");


    titleText.textContent = "Restaurant";
    headerArea.appendChild(titleText);
    imgElement.src = logo;
    headerArea.appendChild(imgElement);

    return headerArea
}

function createNav(page) {
    const buttonArea = document.createElement("nav");
    const homeButton = document.createElement("button");
    const contactButton = document.createElement("button");
    const menuButton = document.createElement("button");

    homeButton.textContent = "Home";
    contactButton.textContent = "Contact";
    menuButton.textContent = "Menu";

    if (page === "home") {
        homeButton.classList.add("active");
    } else if (page === "menu") {
        menuButton.classList.add("active");
    } else if (page === "contact") {
        contactButton.classList.add("active");
    }

    homeButton.addEventListener("click",() => {
        loadHome();
    });

    contactButton.addEventListener("click",() => {
        loadContact();
    });

    menuButton.addEventListener("click",() => {
        loadMenu();
    });

    buttonArea.appendChild(homeButton);
    buttonArea.appendChild(contactButton);
    buttonArea.appendChild(menuButton);

    return buttonArea
}

function loadMenu() {
    const content = document.getElementById("content");

    content.textContent= "";
    content.appendChild(createHeader());
    content.appendChild(createNav("menu"));
    content.appendChild(createMenu());
    content.appendChild(createFooter());
}

function loadHome() {
    const content = document.getElementById("content");

    content.textContent= "";
    content.appendChild(createHeader());
    content.appendChild(createNav("home"));
    content.appendChild(createHome());
    content.appendChild(createFooter());
}

function loadContact() {
    const content = document.getElementById("content");

    content.textContent= "";
    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createContact());
    content.appendChild(createFooter());
}

export {loadHome, loadMenu}