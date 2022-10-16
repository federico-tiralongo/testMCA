import {  useContext } from 'react'
import Header from '../Compontents/header'
import Search from '../Compontents/search'
import { ProductContext } from '../Context/ProductContext'
import { SpinnerCircular } from 'spinners-react';
import "./list.css"


const List = () => {

    const { products } = useContext(ProductContext)

    return (
        <>
            <Header />
            {products.length === 0 ?
             <div className="Spinner">
                <SpinnerCircular size="100px"/>
            </div>
            :
            <div className="listPage">
                <Search products={products} />
            </div>
            }
        </>
    )
}

export default List