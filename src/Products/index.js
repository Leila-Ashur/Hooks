import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Style.css';
import '../ProductDetails/index'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getProducts();
      setLoading(false);
    })();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="products-container">
      {products.map((item) => (
        <div key={item.id} className="product-item">
          <img className="product-image" alt="" src={item.images[1]} />

          <div className="product-details">
            <h3 className="product-title">{item.title}</h3>
            <p className="product-price">Ksh {item.price}</p>
            <p className="product-discount">{item.discountPercentage}%</p>
            <Link to={`/productsdetails/${item.id}`} key={item.id}>
              <button className="details-button">See product details</button>
            </Link>
          </div>

          <Link to="/AddProducts">
            <button className="add-button">Add products</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
