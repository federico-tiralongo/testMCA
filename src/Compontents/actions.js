import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import "./actions.css";
import { BsFillCartFill } from "react-icons/bs";

const Actions = ({ id, options }) => {
  const { newProduct, setNewProduct, addCart } = useContext(ProductContext);
  const [colorCode, setColorCode] = useState("");
  const [storageCode, setStorageCode] = useState("");

  function handleColor(e) {
    setColorCode(e);
  }

  function handleStorage(e) {
    setStorageCode(e);
  }

  async function handleActions() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    };

    fetch("https://front-test-api.herokuapp.com/api/cart", requestOptions).then(
      async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return console.log(error);
        }
        addCart(data);
      }
    );
  }

  useEffect(() => {
    setNewProduct({
      ...newProduct,
      id: id,
      colorCode: colorCode,
      storageCode: storageCode,
    });
  }, [colorCode, storageCode]);

  return (
    <>
      <div>
        <h2>Acciones del producto</h2>

        <div className="actions__container">
          <h3>Colores</h3>
          <div className="actions__options">
            {/* {colorCode === "" && <span>Debes seleccionar una opcion</span>} */}
            {options.colors &&
              options.colors.map((color) => {
                return (
                  <div
                    className="actions__option"
                    key={color.code}
                    onClick={() => handleColor(color.code)}
                    style={
                      colorCode === color.code
                        ? {
                            color: "blue",
                            backgroundColor: "white",
                          }
                        : {
                            color: "white",
                            backgroundColor: "blue",
                          }
                    }
                  >
                    {color.name}
                  </div>
                );
              })}
          </div>
          <h3>Almacenamiento</h3>
          <div className="actions__options">
          {/* {storageCode === "" && <span>Debes seleccionar una opcion</span>} */}
            {options.storages &&
              options.storages.map((storage) => {
                return (
                  <div
                    className="actions__option"
                    key={storage.code}
                    onClick={() => handleStorage(storage.code)}
                    style={
                      storageCode === storage.code
                        ? {
                            color: "blue",
                            backgroundColor: "white",
                          }
                        : {
                            color: "white",
                            backgroundColor: "blue",
                          }
                    }
                  >
                    {storage.name}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="button__container">
          <button onClick={() => handleActions()}>Agregar al Carrito</button>
          <div>
            <BsFillCartFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Actions;
