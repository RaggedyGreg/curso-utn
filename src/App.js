import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import Products from "./screens/Products";
import Header from "./shared/Header";
import Cart from "./screens/Cart";
import { ProductsContextProvider } from "./context/ProductsContext";

function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;
