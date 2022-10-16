
import {render, screen, waitForElement} from '@testing-library/react';
import { ProductContext, ProductsProvider } from '../Context/ProductContext';
import Actions from "../Compontents/actions";

function renderActions(context) {
    const options = {
        colors: ["Black"]
    }
    return render(
      <ProductsProvider value={context}>
        <Actions id="testID" options={options}/>
      </ProductsProvider>
    );
  }

  beforeEach(() => {
    renderActions({products: [1,2],
        expectedProductsLength: "2",
        selectedProduct: {
            brand: "Acer",
            id: "ZmGrkLRPXOTpxsU4jjAcv",
            imgUrl: "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
            model: "Iconia Talk S",
            price: "170"
        },
        expectedSelectedProductBrand: "Acer",
        newProduct: {
            brand: "Acer",
            id: "ZmGrkLRPXOTpxsU4jjAcv",
            imgUrl: "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
            model: "Iconia Talk S",
            price: "170"
        },
        expectedNewProductBrand: "Acer",
        cart: [1,2],
        expectedCartLength: "2",
        expectedSetSelectedProduct: "function () { [native code] }",
        expectedAddCart: `function addCart(product) {
                                    let newArr = [...cart];
                                    newArr.push(product);
                                    setCart(newArr);
                                }`,
        expectedSetNewProduct: "function () { [native code]" } );
  });

describe('actions component', () => {

    test('renderiza textos fijos', async () => {
        
        const actionsTitle = screen.getByText("Acciones del producto");
        expect(actionsTitle).toBeInTheDocument();
    });

}); 
