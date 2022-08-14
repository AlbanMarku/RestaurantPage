import style from "./style.css"

function createHome() {
    const mainArea = document.createElement("main");
    const div = document.createElement("div");
    const headerText = document.createElement("h2");
    const para = document.createElement("p");

    headerText.textContent = "title";
    para.textContent = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero facilis tempore laudantium ducimus cupiditate ratione recusandae officia cum nemo neque asperiores, maxime molestiae exercitationem architecto id, ipsum voluptatibus est";
    mainArea.appendChild(div);
    div.appendChild(headerText);
    div.appendChild(para);

    return mainArea
}

export default createHome