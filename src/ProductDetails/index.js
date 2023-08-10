import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';


const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="productDetails">
      <h1 className="dt">Product Details</h1>
      <div className="productContainer">
        <img src={product.thumbnail} alt={product.title} />
        <h2 className="productName">Name: {product.title}</h2>
        <p className="productDescription">Description: {product.description}</p>
        <p className="productBrand">Brand: {product.brand}</p>
        <p className="productPrice">Price: {product.price}</p>
        <h4 className="productRatings">Ratings: {product.rating}</h4>
        <h4 className="productStock">Stock: {product.stock}</h4>
      </div>
    </div>
  );
};

export default ProductDetails;
