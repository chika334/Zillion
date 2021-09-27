import React from "react";
import AllProducts from "./AllProducts";
import Agric from "./AllProducts/Agric";
import Beauty from "./AllProducts/Beauty";
import Clothing from "./AllProducts/Clothing";
import Electrical from "./AllProducts/Electrical";
import FoodNBev from "./AllProducts/FoodNBev";
import FurnitureNFitness from "./AllProducts/FurnitureNFitness";
import ItNTech from "./AllProducts/ItNTech";
import Stationery from "./AllProducts/Stationery";

export default function Products(props) {
  // const [values, setValues] = React.useState("0");
  return (
    <div>
      {props.values === 0 ? <AllProducts /> : ""}
      {props.values === 1 ? <FoodNBev /> : ""}
      {props.values === 2 ? <FurnitureNFitness /> : ""}
      {props.values === 3 ? <Stationery /> : ""}
      {props.values === 4 ? <ItNTech /> : ""}
      {props.values === 5 ? <Clothing /> : ""}
      {props.values === 6 ? <Electrical /> : ""}
      {props.values === 7 ? <Beauty /> : ""}
      {props.values === 8 ? <Agric /> : ""}
      daniel
    </div>
  );
}
