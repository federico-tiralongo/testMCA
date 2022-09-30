import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Views/details";
import List from "./Views/list"
import {ProductsProvider} from "./Context/ProductContext"


function App() {

  return (
    <>
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>

    </>
  );
}

export default App;
