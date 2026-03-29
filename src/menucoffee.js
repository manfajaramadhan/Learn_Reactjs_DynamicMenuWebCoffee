import coffee1 from "./img/caramel_cloud_latte.png";
import coffee2 from "./img/midnight_velvet_americano.png";
import coffee3 from "./img/hazelnut_dream_cappuccino.png";
import coffee4 from "./img/choco_lava_mocha.png";
import coffee5 from "./img/vanilla_sky_macchiato.png";
import coffee6 from "./img/tropical_cold_brew_bliss.png";

const coffeeMenu = [
  {
    name: "Caramel Cloud Latte",
    description: "Smooth latte with creamy milk and sweet caramel clouds",
    price: "Rp 32.000",
    foto: coffee1,
    stock: Math.random() < 0.5,
  },
  {
    name: "Midnight Velvet Americano",
    description: "Bold americano with a smooth and rich finish",
    price: "Rp 27.000",
    foto: coffee2,
    stock: Math.random() < 0.5,
  },
  {
    name: "Hazelnut Dream Cappuccino",
    description: "Foamy cappuccino infused with sweet hazelnut flavor",
    price: "Rp 30.000",
    foto: coffee3,
    stock: Math.random() < 0.5,
  },
  {
    name: "Choco Lava Mocha",
    description: "Chocolate-rich mocha with a lava-like sweetness",
    price: "Rp 33.000",
    foto: coffee4,
    stock: Math.random() < 0.5,
  },
  {
    name: "Vanilla Sky Macchiato",
    description: "Layered macchiato with soft vanilla aroma",
    price: "Rp 29.000",
    foto: coffee5,
    stock: Math.random() < 0.5,
  },
  {
    name: "Tropical Cold Brew Bliss",
    description: "Refreshing cold brew with a hint of tropical twist",
    price: "Rp 31.000",
    foto: coffee6,
    stock: Math.random() < 0.5,
  },
];

export default coffeeMenu;
