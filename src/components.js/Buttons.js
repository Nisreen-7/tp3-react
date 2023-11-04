import React from "react";
import './Buttons.css';
import productsData from "../products-data";

function Buttons({ menuProducts, filterProducts, setProductList }) {
  return (
    <div className="btn-container">
      {menuProducts.map((productCategory) => (
        <button  className="btn" key={productCategory} onClick={() => filterProducts(productCategory)}>
          {productCategory}
        </button>
      ))}

      <button  className="btn" onClick={() => setProductList(productsData)}>
        All
      </button>
    </div>
  );
}

export default Buttons;
