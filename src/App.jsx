import { useState } from "react";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [cart, setCart] = useState([]);
  const [cook, setCook] = useState([]);
  const handleCart = (product) => {
    const isExist = cart.find((pd) => pd.recipe_id === product.recipe_id);
    if (!isExist) {
      setCart([...cart, product]);
    }
  };
  const handleRemoveCart = (product) => {
    const remaining = cart.filter((p) => p.recipe_id !== product.recipe_id);
    setCart(remaining);
    setCook([...cook, product]);
  };
  return (
    <div className="w-[90%] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="lg:w-[80%] w-full mx-auto flex flex-col item-center text-center my-10">
        <h3 className="font-semibold text-[#150B2B] text-[40px] mb-3">
          Our Recipes
        </h3>
        <p className="w-full lg:w-[80%] mx-auto text-[#150B2B99]">
          Recipes are culinary blueprints, detailing ingredients and steps to
          prepare flavorful meals. They are versatile tools for both novice
          cooks and seasoned chefs.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 my-10">
        <div className="basis-[60%]">
          <Products handleCart={handleCart}></Products>
        </div>
        <div className="basis-[40%]">
          <Cart
            cook={cook}
            handleRemoveCart={handleRemoveCart}
            cart={cart}
          ></Cart>
        </div>
      </div>
    </div>
  );
}
export default App;
