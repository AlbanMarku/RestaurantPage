import style from "./style.css"

function createFooter() {
    const contentArea = document.getElementById("content");
    const footerArea = document.createElement("footer");
    const sampleText = document.createElement("p");

    contentArea.appendChild(footerArea);
    sampleText.textContent = "footer";
    footerArea.appendChild(sampleText);
}

export default createFooter