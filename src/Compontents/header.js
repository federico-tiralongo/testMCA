import { useContext, useEffect } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { Link } from "react-router-dom"
import "./header.css"
import { createAdd } from 'typescript'



const Header = () => {

    const { cart } = useContext(ProductContext)


    useEffect(() => {

    }, [cart])

    const routes =
        [{
            route: "/",
            name: "List",

        }
            ,
        {
            route: "/details",
            name: "Details",
        }
        ]

    return (

        <div className='headerContainer'>
            <Link to={"/"}>
                <div className='headerContainer__icon'>

                </div>
            </Link>

            <div className='headerContainer__breadChumbs'>
                {routes.map((route) => {
                    return (
                        <>
                            <Link to={route.route}>
                                {route.name}
                            </Link>
                        </>
                    )
                })}
            </div>

            <div className='headerContainer__cart'>
                {cart && cart.length > 1 ? cart.length - 1 : "0"}

            </div>

        </div>
    )
}

export default Header