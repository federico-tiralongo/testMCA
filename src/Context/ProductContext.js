import { useEffect, createContext, useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [localCart, setLocalCart] = useLocalStorage('cart',[]);
  const root = "https://front-test-api.herokuapp.com/";
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [cart, setCart] = useState(localCart);
  const [newProduct, setNewProduct] = useState({
    id: "",
    colorCode: "",
    storageCode: "",
  });
  

  const endpoints = {
    getAll: "api/product",
  };

  function addCart(product) {
    let newArr = [...cart];
    newArr.push(product);
    setCart(newArr);
    setLocalCart(newArr);
  }

  useEffect(() => {
    fetch(`${root}${endpoints.getAll}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        localStorage.setItem("allProducts", JSON.stringify(data));
        
      });
     
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
