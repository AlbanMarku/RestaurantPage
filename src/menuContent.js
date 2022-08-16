import style from "./style.css"

function createMenu() {
    const mainArea = document.createElement("main");
    const div = document.createElement("div");
    const headerText = document.createElement("h2");

    headerText.textContent = "title";
    mainArea.appendChild(div);
    div.appendChild(headerText);
    div.appendChild(paraContent("I am the menu probs changed the ids for styling."));

    return mainArea
}

function paraContent(text) {
    const para = document.createElement("p");
    para.textContent = text;

    return para
}

export default createMenu