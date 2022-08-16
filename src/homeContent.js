import style from "./style.css"
import homeImage from "./pics/mainPic.jpeg"

function createHome() {
    const mainArea = document.createElement("main");
    const div = document.createElement("div");
    const img = document.createElement("img");

    div.classList.add("homeClass");
    mainArea.appendChild(div);
    div.appendChild(paraContent("Serving since 1999"));
    div.appendChild(paraContent("Made with passion"));
    img.src = homeImage;
    div.appendChild(img);
    div.appendChild(paraContent("Order now"));

    return mainArea
}

function paraContent(text) {
    const para = document.createElement("p");
    para.textContent = text;

    return para
}

export default createHome