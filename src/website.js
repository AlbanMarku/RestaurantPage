function testerFunc() {
    const divContent = document.getElementById("content");
    const texter = document.createElement("p");

    console.log("tester");

    texter.textContent = "yoo";

    divContent.appendChild(texter);

    return divContent
}

export default testerFunc;