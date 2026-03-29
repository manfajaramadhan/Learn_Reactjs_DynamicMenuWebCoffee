import Menu from "./Menu.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <h1 style={{ color: "brown", textAlign: "center", marginTop: "20px" }}>
      Jarmustainne Coffee
    </h1>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  if (isOpen) {
    return <FooterOpen openHour={openHour} closeHour={closeHour} />;
  } else {
    return <FooterClose openHour={openHour} closeHour={closeHour} />;
  }
}

function FooterOpen({ openHour, closeHour }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          We Are Open On {openHour}:00 - {closeHour}:00
        </p>
        <button className="order">Order Now!</button>
      </div>

      <Copyright />
    </footer>
  );
}

function FooterClose({ openHour, closeHour }) {
  return (
    <footer className="footer">
      <p>
        We Are Closed On {openHour}:00 - {closeHour}:00
      </p>

      <Copyright />
    </footer>
  );
}

function Copyright() {
  return (
    <div>
      <br />
      <p>{new Date().getFullYear()} © manfajaramadhan</p>
    </div>
  );
}

export default App;
