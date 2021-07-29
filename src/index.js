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
    const container = document.createElement("div");
    container.classList.add("container");

    // get container data
    const price = document.createElement("h3");
    price.textContent = `$${(Math.round(item.price * 100) / 100).toFixed(2)}`;

    const name = document.createElement("h3");
    name.textContent = item.name + " ~ " + price.textContent;

    const description = document.createElement("p");
    description.textContent = item.description;

    if (item.spicy) {
      name.classList.add("spicy");
      container.classList.add("spicy-items");
    }

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

const output = () => {
  sortMenuItems();
  render();
  const box = document.querySelector("#check");
  const spicyItems = document.querySelectorAll(".spicy-items");
  box.onClick = () => {
    spicyItems.forEach((item) => {
      item.style.display = box.checked ? "block" : "none";
    });
  };
};

output();
