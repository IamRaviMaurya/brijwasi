import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={`/product/${props.id}`} className="item" onClick={handleClick}>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className="item-price-new">₹{props.new_price}</div>
        {props.old_price && <div className="item-price-old">₹{props.old_price}</div>}
      </div>
    </Link>
  );
};

export default Item;
