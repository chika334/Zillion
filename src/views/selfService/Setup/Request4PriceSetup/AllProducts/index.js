import React from 'react'
import Agric from "./Agric";
import Beauty from "./Beauty";
import Clothing from "./Clothing";
import Electrical from "./Electrical";
import FoodNBev from "./FoodNBev";
import FurnitureNFitness from "./FurnitureNFitness";
import ItNTech from "./ItNTech";
import Stationery from "./Stationery";

export default function index() {
  return (
    <div>
      <FoodNBev />
      <FurnitureNFitness />
      <Stationery />
      <ItNTech />
      <Clothing />
      <Electrical/>
      <Beauty />
      <Agric />
      {/* All Products */}
    </div>
  )
}
