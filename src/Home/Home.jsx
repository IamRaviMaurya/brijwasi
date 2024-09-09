import React from 'react'
import Products from '../Components/Products/Products'
import data_namkeens from "../Assets/Json Data/Namkeen";
import dat_sweets from "../Assets/Json Data/sweets";


const Home = () => {
  return (
    <div>
      <Products title="Sweets" data={dat_sweets}/>
      <Products title="Namkeen" data={data_namkeens}/>
    </div>
  )
}

export default Home
