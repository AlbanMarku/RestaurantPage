import { createFooter, createHeader,createNav } from "./headerFooter"
import createHome from "./homeContent"


console.log("this is loaded");

//load the main page

const content = document.getElementById("content");

content.appendChild(createHeader());
content.appendChild(createNav());
content.appendChild(createHome());
content.appendChild(createFooter());