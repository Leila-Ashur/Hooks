import React from "react";
import './style.css';
import { useParams } from "react-router";

const Form = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Add New Product</h2>
      <form className="myForm">
        <div className="form-group">
          <label htmlFor="name">Product Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter product name" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" placeholder="Enter product description" className="form-input"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" placeholder="Enter product price" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount:</label>
          <input type="number" id="discount" name="discount" placeholder="Enter discount percentage" className="form-input" />
        </div>
        <button type='submit' className="form-button">Add Product</button>
      </form>
    </div>
  )
}

export default Form;
