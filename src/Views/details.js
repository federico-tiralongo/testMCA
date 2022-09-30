import { useContext, useState, useEffect } from 'react'
import { ProductContext } from '../Context/ProductContext'
import Header from '../Compontents/header'
import "./details.css"
import Actions from '../Compontents/actions'


const Details = () => {

  const { selectedProduct } = useContext(ProductContext)
  const root = "https://front-test-api.herokuapp.com/api/product/"

  const [dataSelectedProdcut, setDataSelectedProdcut] = useState({})


  useEffect(() => {
    if (selectedProduct.id) {
      fetch(`${root}${selectedProduct.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            console.log(dataSelectedProdcut, "dataselected");
            setDataSelectedProdcut(data)
            console.log(dataSelectedProdcut, "dataselected");
            localStorage.setItem('selectedProdcut', JSON.stringify(data))
          }, 500);
        console.log(selectedProduct,"selectedProdcut");
        })
    }

  }, [])

  return (
    <>
      <Header />
      {
          <div className='detailsPage'>
            <div className='detailPage__image'>
              <img src={selectedProduct.imgUrl} />
            </div>
            <div className="detailPage__text">
              <div className='detailPage__text__description'>
                <h2>Descripción del producto</h2>
                <ul>

                  <li>
                    {dataSelectedProdcut.brand}
                  </li>
                  <li>
                    {dataSelectedProdcut.model}
                  </li>
                  <li>
                    {dataSelectedProdcut.price}
                  </li>
                  <li>
                    {dataSelectedProdcut.cpu}
                  </li>
                  <li>
                    {dataSelectedProdcut.ram}
                  </li>
                  <li>
                    {dataSelectedProdcut.os}
                  </li>
                  <li>
                    {dataSelectedProdcut.displayResolution}
                  </li>
                  <li>
                    {dataSelectedProdcut.battery}
                  </li>
                  <li>

                    {/* {dataSelectedProdcut ? dataSelectedProdcut.primaryCamera.map((e) => {
                  console.log(e, "primary");
                  return (
                    <>
                      {e} ,

                    </>
                  )
                }) : ""} */}
                  </li>
                  {
                    <li>
                      {dataSelectedProdcut.dimentions}
                    </li>}
                  <li>
                    {dataSelectedProdcut.weight} gr
                  </li>
                </ul>
              </div>
              <div className='detailPage__text__actions'>
                {
                  selectedProduct ?
                    <Actions colors={dataSelectedProdcut.colors} sims={dataSelectedProdcut.sim} id={dataSelectedProdcut.id} />
                    : ""
                }
              </div>
            </div>
          </div>
      }

    </>
  )
}

export default Details