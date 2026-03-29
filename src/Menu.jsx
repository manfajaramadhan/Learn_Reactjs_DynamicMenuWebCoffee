import React from "react";
import coffeeMenu from "./menucoffee";

function Menu() {
  const coffeeAvail = coffeeMenu;
  const numberOfCoffee = coffeeAvail.length;

  return (
    <main className="menu">
      <h2>List Menu</h2>
      {numberOfCoffee > 0 && (
        <React.Fragment>
          <p>We have {numberOfCoffee} types of coffee available!</p>

          <ul className="foods">
            {coffeeAvail.map((coffee) => (
              <Coffee coffee={coffee} key={coffee.name} />
            ))}
          </ul>
        </React.Fragment>
      )}
    </main>
  );
}

function Coffee({ coffee }) {
  const { name, description, price, foto, stock } = coffee;

  return (
    <li className={`food ${!stock ? "sold-out" : ""}`}>
      <img src={foto} alt={name} width={200} height={150} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{stock ? price : "Sold Out"}</span>
      </div>
    </li>
  );
}

export default Menu;
