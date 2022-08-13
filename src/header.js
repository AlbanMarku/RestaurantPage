import logo from "./pics/food.svg"
import style from "./style.css"

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

export default createHeader