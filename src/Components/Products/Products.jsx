import React from "react";
import "./Products.css";
import Item from "../Item/Item";

const Products = ({ title, data }) => {
  return (
    <div className="popular">
      <h1>{title}</h1>
      <hr />
      <div className="popular-item">
        {data.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
