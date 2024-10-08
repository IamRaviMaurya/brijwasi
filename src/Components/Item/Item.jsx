import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className="item-price-new"><i className="fa fa-inr"></i>{props.new_price}</div>
        <div className="item-price-old"><i className="fa fa-inr"></i>{props.old_price}</div>
      </div>
    </div>
  )
}

export default Item
