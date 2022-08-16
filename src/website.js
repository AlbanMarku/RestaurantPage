import style from "./style.css"
import logo from "./pics/food.svg"
import createHome from "./homeContent";
import createMenu from "./menuContent";
import createContact from "./contactContent"

function createFooter() {
    const footerArea = document.createElement("footer");
    const sampleText = document.createElement("p");

    sampleText.textContent = "footer";
    footerArea.appendChild(sampleText);
    
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

function createNav() {
    const buttonArea = document.createElement("nav");
    const homeButton = document.createElement("button");
    const contactButton = document.createElement("button");
    const menuButton = document.createElement("button");

    homeButton.textContent = "Home";
    contactButton.textContent = "Contact";
    menuButton.textContent = "Menu";

    homeButton.addEventListener("click",() => {
        loadHome();
        homeButton.classList.add("active");
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
    content.appendChild(createNav());
    content.appendChild(createMenu());
    content.appendChild(createFooter());
}

function loadHome() {
    const content = document.getElementById("content");

    content.textContent= "";
    content.appendChild(createHeader());
    content.appendChild(createNav());
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