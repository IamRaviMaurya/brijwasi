import React from "react";
import "./Namkeen.css";
import data_product from "../../Assets/Json Data/data";
import Item from "../Item/Item";

const Namkeen = () => {
  return (
    <div className="popular">
      <h1>NamKeen</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Namkeen;
