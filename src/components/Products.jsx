import { useEffect, useState } from "react";
import Product from "./Product";
import PropTypes from 'prop-types';

const Products = ({ handleCart }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./recipe.json");
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {products.map((product, idx) => (
        <Product
          key={idx}
          handleCart={handleCart}
          product={product}
        ></Product>
      ))}
    </div>
  );
};

Products.propTypes = {
    handleCart: PropTypes.func.isRequired,
  };
export default Products;
