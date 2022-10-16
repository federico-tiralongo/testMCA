import "./Item.css";

const Item = ({ imgUrl, brand, price, model }) => {
  return (
    <div className="itemContainer">
      <div className="itemContainer__image">
        <img src={imgUrl} alt="imagenMobil"/>
      </div>
      <div className="itemContainer__text">
        <h3>{brand}</h3>
        <h4>{model}</h4>
        {price ? <h5>{price} €</h5> : <h5>Producto no disponible</h5>}
      </div>
    </div>
  );
};

export default Item;
