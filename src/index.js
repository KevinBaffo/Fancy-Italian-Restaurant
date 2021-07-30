import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;

// sort menu items using menuOrder
const sortItems = () => {
  menuItems.sort((a, b) => {
    return a.menuOrder - b.menuOrder;
  });
};

const renderMenu = () => {
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

    const namePlusPrice = document.createElement("h3");
    namePlusPrice.textContent = item.name + " ~ " + price.textContent;

    const description = document.createElement("p");
    description.textContent = item.description;

    if (item.spicy) {
      namePlusPrice.classList.add("spicy", "center");
      container.classList.add("spicy-items");
    }

    // build container
    container.append(namePlusPrice, description);

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

// filtering spicy items
const filterSpicy = () => {
  const spicyItems = document.querySelectorAll(".spicy-items");
  const showSpicy = document.querySelector("#check");
  showSpicy.addEventListener("change", function (e) {
    spicyItems.forEach((item) => {
      if (showSpicy.checked) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
};

sortItems();
renderMenu();
filterSpicy();
