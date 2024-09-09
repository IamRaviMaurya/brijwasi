import React, { useState } from 'react'
import Products from '../Components/Products/Products'
import data_namkeens from "../Assets/Namkin/Namkeen";
import data_sweets from "../Assets/Sweet/sweets";
import data_snacks from "../Assets/Snacks/Snacks";
import data_drinks from "../Assets/Drinks/Drinks";
import SearchBar from '../Components/Search/SearchBar';


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filterData = (data) => {
    if (!searchTerm) return data;
    return data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <Products title="Sweets" data={filterData(data_sweets)}/>
      <Products title="Namkeen" data={filterData(data_namkeens)}/>
      <Products title="Snacks" data={filterData(data_snacks)}/>
      <Products title="Drinks" data={filterData(data_drinks)}/>
    </div>
  )
}

export default Home
