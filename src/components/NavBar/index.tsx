import { NavLink, Link } from "react-router-dom";

import homeIcon from "../../assets/img/home-svgrepo-com 1.svg";

import "./styles.css";

const NavBar = () => {
  return (
    <header className="header-container">
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/products"
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/about"
            >
              Sobre nós
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <Link to="/">
          <img src={homeIcon} alt="ícone home" />
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
