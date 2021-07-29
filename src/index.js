import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

// sort menu items using menuOrder
const sortMenuItems = () => {
  menuItems.sort((a, b) => {
    return a.menuOrder - b.menuOrder;
  });
};

const render = () => {
  sortMenuItems();

  // create menu categories
  const starters = document.querySelector("#starters");
  const pasta = document.querySelector("#pasta");
  const pizza = document.querySelector("#pizza");

  menuItems.forEach((item) => {
    const input = document.querySelector("#check");

    const container = document.createElement("div");
    container.classList.add("container");

    // get container data
    const name = document.createElement("h3");
    name.textContent = item.name;

    const price = document.createElement("h3");
    price.textContent = `$${(Math.round(item.price * 100) / 100).toFixed(2)}`;
    name.append(price);

    const description = document.createElement("p");
    description.textContent = item.description;

    if (item.spicy) {
      name.classList.add("spicy");
    }

    // container.style.display = input.checked && item.spicy ? "block" : "none";
    container.append(name, description);

    // assign item to category using type
    if (item.type === "starters") {
      starters.append(container);
    } else if (item.type === "pasta") {
      pasta.append(container);
    } else if (item.type === "pizza") {
      pizza.append(container);
    }
  });
};

render();
