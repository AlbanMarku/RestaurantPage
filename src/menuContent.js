import style from "./style.css"

function createMenu() {
    const mainArea = document.createElement("main");
    const gridDiv = document.createElement("div");

    gridDiv.classList.add("menuClass");

    mainArea.appendChild(gridDiv);

    gridDiv.appendChild(createItem("food", "lore"));
    gridDiv.appendChild(createItem("food", "lore"));
    gridDiv.appendChild(createItem("food", "lore"));

    return mainArea
}

function createItem(name, description) {
    const item = document.createElement("div");
    
    item.classList.add("menuItem");

    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    const foodImage = document.createElement("img");
    foodImage.src = "pics/food.svg";
    foodImage.alt = `${name}`;
  
    item.appendChild(foodImage);
    item.appendChild(foodName);
    item.appendChild(foodDescription);
  
    return item;
}

export default createMenu