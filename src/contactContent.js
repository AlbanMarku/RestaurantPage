import style from "./style.css"

function createContact() {
    const mainArea = document.createElement("main");
    const div = document.createElement("div");
    const headerText = document.createElement("h2");

    div.classList.add("contactClass");
    headerText.textContent = "Contact us";
    mainArea.appendChild(div);
    div.appendChild(headerText);
    div.appendChild(paraContent("details"));

    return mainArea
}

function paraContent(text) {
    const para = document.createElement("p");
    para.textContent = text;

    return para
}

export default createContact