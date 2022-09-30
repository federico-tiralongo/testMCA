import Item from './Item'
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext'
import { useNavigate } from "react-router-dom";
import "./search.css"



const SearchList = ({ filteredProducts }) => {

    const { selectProduct } = useContext(ProductContext)
    const naviagate = useNavigate()
    const filtered = filteredProducts.map((product) => {
        return (
            <>
                <div onClick={() => {
                    selectProduct(product)
                    setTimeout(() => {
                        naviagate("/details")
                    }, 700);
                }} >
                    <Item
                        imgUrl={product.imgUrl}
                        brand={product.brand}
                        model={product.model}
                        price={product.price}

                    />
                </div>

            </>
        )
    })


    return (
        <div className="displayList">
            {filtered}
        </div>
    )
}

export default SearchList