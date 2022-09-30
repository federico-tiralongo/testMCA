import {  useContext } from 'react'
import Header from '../Compontents/header'
import Search from '../Compontents/search'
import { ProductContext } from '../Context/ProductContext'
import "./list.css"


const List = () => {

    const { products } = useContext(ProductContext)

    return (
        <>
            <Header />
            <div className="listPage">
                <Search products={products} />
            </div>
        </>
    )
}

export default List