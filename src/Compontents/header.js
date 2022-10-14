import { useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import Logo from "../smartphone.png";
import { BsCart } from "react-icons/bs";
import "./header.css";

const Header = () => {
  const { cart } = useContext(ProductContext);

  useEffect(() => {}, [cart]);

  const routes = [
    {
      route: "/",
      name: "List",
    },
    {
      route: "/details",
      name: "Details",
    },
  ];

  return (
    <div className="headerContainer">
      <Link to={"/"}>
        <div className="headerContainer__icon">
          <img src={Logo} />
        </div>
      </Link>

      <div className="headerContainer__breadChumbs">
        {routes.map((route) => {
          return (
            <>
              <Link to={route.route}>{route.name}</Link>
            </>
          );
        })}
      </div>

      <div className="headerContainer__cart">
        <h4>{cart.length}</h4>
        <BsCart />
      </div>
    </div>
  );
};

export default Header;
