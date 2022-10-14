import { useEffect, createContext, useState } from "react";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const root = "https://front-test-api.herokuapp.com/";
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: "",
    colorCode: "",
    storageCode: "",
  });

  const endpoints = {
    getAll: "api/product",
    post: "api/cart",
  };

  //   function chooseProduct(e) {
  //     console.log(selectedProduct);

  //     setSelectedProduct(e);

  //     console.log(selectedProduct);

  //   }

  function addCart(product) {
    let newArr = [...cart];
    newArr.push(product);
    setCart(newArr);
  }

  useEffect(() => {
    fetch(`${root}${endpoints.getAll}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        localStorage.setItem("allProducts", JSON.stringify(data));
      });
    console.log(newProduct, "newProduct");
    console.log(cart, "cart");
  }, [newProduct, cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        newProduct,
        cart,
        setSelectedProduct,
        setNewProduct,
        addCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductsProvider };
