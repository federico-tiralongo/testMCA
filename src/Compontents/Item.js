import { useState, useEffect, useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import "./Item.css"

const Item = ({ imgUrl, brand, price, model }) => {


    return (
        <div className='itemContainer' >
            <div className='itemContainer__image'>
               <img src = {imgUrl}/>
            </div>
            <div className='itemContainer__text'>
                <h3>{brand}</h3>
                <h4>{model}</h4>
                <h5>{price}€</h5>
            </div>
        </div>
    )
}

export default Item