import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/home">Início</Link>
          </li>
          <li>
            <Link to="/about">JOGAR</Link>
          </li>
          <li>
            <Link to="/store">Loja Oficial</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
