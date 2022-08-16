import style from "./style.css"

function createContact() {
    const mainArea = document.createElement("main");
    const div = document.createElement("div");
    const headerText = document.createElement("h2");

    div.classList.add("contactClass");
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

export default createContact