import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import "./actions.css"

const Actions = ({ colors, sims, id }) => {


    const { newProduct, setNewProduct, addCart } = useContext(ProductContext)
    // console.log(sims, "sims");
    // console.log(colors, "colors");

    const [colorCode, setColorCode] = useState("")
    const [storageCode, setStorageCode] = useState("")



    function handleColor(e) {
        setColorCode(e)
    }

    function handleStorage(e) {
        setStorageCode(e)
    }

    function handleActions() {

        setNewProduct({

            ...newProduct,
            id: id,
            colorCode: colorCode,
            storageCode: storageCode


        })
        setTimeout(() => {
        addCart(newProduct)
    


        
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
                
            };

            console.log(requestOptions.body);
            fetch('https://front-test-api.herokuapp.com/api/cart', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log(data)                   
                });
        }, 1000);






    }





    useEffect(() => {

    }, [])


    return (


        <>

            <h2>Acciones del producto</h2>
            <div>
                <h3>Color</h3>

                <div className='colors' >
                    {
                        colors && colors.map((color, index) => {
                            return (
                                <>
                                    <div className='colors__colorContainer' onClick={() => handleColor(color, index)}>
                                        <h5>
                                            {color}
                                        </h5>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <h3>
                    Almacenamiento
                </h3>

                <div className='sim'>
                    {sims && sims.map((sim, index) => {
                        return (
                            <>
                                <div className='colors__colorContainer' onClick={()=>handleStorage(sim,index)}>
                                    <h5>
                                        {sim}
                                    </h5>
                                </div>
                            </>
                        )
                    })}
                </div>

                <div className='button' onClick={() => handleActions()}>
                    <button>Añadir a la cesta</button>
                </div>
            </div>

        </>
    )
}

export default Actions