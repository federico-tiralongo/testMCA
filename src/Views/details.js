import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import Header from "../Compontents/header";
import Actions from "../Compontents/actions";
import "./details.css";

const Details = () => {
  const { selectedProduct } = useContext(ProductContext);
  const root = "https://front-test-api.herokuapp.com/api/product/";

  const [dataSelectedProdcut, setDataSelectedProdcut] = useState({});

  useEffect(() => {
    if (selectedProduct !== {}) {
      fetch(`${root}${selectedProduct.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("data", data);
          setDataSelectedProdcut(data);
          console.log("dataSelectedProduct", dataSelectedProdcut);
        });
    } else {
      console.log("tienes un error");
    }
  }, []);

  return (
    <>
      <Header />
      {dataSelectedProdcut.id ? (
        <div className="detailsPage">
          <div className="detailPage__image">
            <img src={dataSelectedProdcut.imgUrl} />
          </div>
          <div className="detailPage__text">
            <div className="detailPage__text__description">
              <h2>Descripción del producto</h2>
              <ul>
                <li>{dataSelectedProdcut.brand}</li>
                <li>{dataSelectedProdcut.model}</li>
                <li>{dataSelectedProdcut.price}</li>
                <li>{dataSelectedProdcut.cpu}</li>
                <li>{dataSelectedProdcut.ram}</li>
                <li>{dataSelectedProdcut.os}</li>
                <li>{dataSelectedProdcut.displayResolution}</li>
                <li>{dataSelectedProdcut.battery}</li>
                <li>
                  {typeof dataSelectedProdcut.primaryCamera === "array"
                    ? dataSelectedProdcut.primaryCamera.map((e) => {
                        return <>{` ${e} `}</>;
                      })
                    : dataSelectedProdcut.primaryCamera}
                </li>
                {<li>{dataSelectedProdcut.dimentions}</li>}
                <li>{dataSelectedProdcut.weight} gr</li>
              </ul>
            </div>
            <div className="detailPage__text__actions">
              <Actions
                colors={dataSelectedProdcut.colors}
                sims={dataSelectedProdcut.sim}
                id={dataSelectedProdcut.id}
                options={dataSelectedProdcut.options}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="noProductSelected">
          <h1>
            Selecciona algún Producto en ela lista de la
            <br></br>
            <Link to={"/"}>
              <a>LISTA</a>
            </Link>
          </h1>
        </div>
      )}
    </>
  );
};

export default Details;
