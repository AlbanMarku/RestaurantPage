import style from "./style.css"
import logo from "./pics/food.svg"

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

    buttonArea.appendChild(homeButton);
    buttonArea.appendChild(contactButton);
    buttonArea.appendChild(menuButton);

    return buttonArea

}
export {createFooter, createHeader,createNav}