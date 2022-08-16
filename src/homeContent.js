import style from "./style.css"

function createHome() {
    const mainArea = document.createElement("main");
    const div = document.createElement("div");
    const headerText = document.createElement("h2");

    div.classList.add("homeClass");
    headerText.textContent = "title";
    mainArea.appendChild(div);
    div.appendChild(headerText);
    div.appendChild(paraContent("this is the text"));

    return mainArea
}

function paraContent(text) {
    const para = document.createElement("p");
    para.textContent = text;

    return para
}

export default createHome