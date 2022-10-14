import Item from "./Item";
import { useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import "./search.css";

const SearchList = ({ filteredProducts }) => {
  const { setSelectedProduct, selectedProduct } = useContext(ProductContext);
  const naviagate = useNavigate();


  function chooseProduct(e) {
    setSelectedProduct(e);
    setTimeout(() => {
      naviagate("/details");
    }, 700);
  }

  useEffect(() => {
    
  }, [selectedProduct]);

  const filtered = filteredProducts.map((product, index) => {
    return (
      <>
        <div
          onClick={() => {
            chooseProduct(product);
          }}
          key={index}
        >
          <Item
            imgUrl={product.imgUrl}
            brand={product.brand}
            model={product.model}
            price={product.price }
          />
        </div>
      </>
    );
  });

  return (
    <div className="listFlexContainer">
      <div className="displayList">{filtered}</div>
    </div>
  );
};

export default SearchList;
