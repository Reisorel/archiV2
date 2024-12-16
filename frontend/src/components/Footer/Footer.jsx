import "./Footer.css";
import ordre from "../../assets/logos/ordre.jpg";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="ordre">
        <img src={ordre} alt="" />
      </div>
      <p>2024 - CASSANDRE MARION ARCHITECTURE</p>
    </footer>
  );
}

export default Footer;
