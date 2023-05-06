import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <>
      <div className="header-container-nav-product">
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeProduct" : "inactiveProduct"
                }
                to="/products/computador"
              >
                Computadores
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeProduct" : "inactiveProduct"
                }
                to="/products/eletronico"
              >
                Eletrônicos
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeProduct" : "inactiveProduct"
                }
                to="/products/livro"
              >
                Livros
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
