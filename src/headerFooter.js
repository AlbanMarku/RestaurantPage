import style from "./style.css"
import logo from "./pics/food.svg"

function createFooter() {
    const contentArea = document.getElementById("content");
    const footerArea = document.createElement("footer");
    const sampleText = document.createElement("p");

    contentArea.appendChild(footerArea);
    sampleText.textContent = "footer";
    footerArea.appendChild(sampleText);
}

function createHeader() {
    const contentArea = document.getElementById("content");
    const headerArea = document.createElement("header");
    const titleText = document.createElement("h1");
    const imgElement = document.createElement("img");
    

    contentArea.appendChild(headerArea);
    titleText.textContent = "Restaurant";
    headerArea.appendChild(titleText);
    imgElement.src = logo;
    headerArea.appendChild(imgElement);
}
export {createFooter, createHeader}