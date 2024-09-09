import React from 'react'
import Products from '../Components/Products/Products'
import data_namkeens from "../Assets/Namkin/Namkeen";
import dat_sweets from "../Assets/Sweet/sweets";
import data_snacks from "../Assets/Snacks/Snacks";
import data_drinks from "../Assets/Drinks/Drinks";


const Home = () => {
  return (
    <div>
      <Products title="Sweets" data={dat_sweets}/>
      <Products title="Namkeen" data={data_namkeens}/>
      <Products title="Snacks" data={data_snacks}/>
      <Products title="Drinks" data={data_drinks}/>
    </div>
  )
}

export default Home
