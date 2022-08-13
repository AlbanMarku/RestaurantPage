import createHeader from "./header"
import createHome from "./homeContent"
import createFooter from "./footer"

console.log("this is loaded");

//load the main page

createHeader("you are here");
createHome();//target for changing content
createFooter();