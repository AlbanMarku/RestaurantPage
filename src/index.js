import { createFooter, createHeader } from "./headerFooter"
import createHome from "./homeContent"


console.log("this is loaded");

//load the main page

createHeader();
createHome();//target for changing content
createFooter();