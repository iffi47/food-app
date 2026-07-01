import { useState } from "react";
import MealItem from "./MealItem";


export default function Meals(){
  const [meals, setMeals] = useState([])
  async function fetchMeal() {
   const response = await fetch("http://localhost:3000/meals");
   if (!response.ok) {
    return;
   }
   const mealsData = await response.json();
   setMeals(mealsData);
  }
  return (
   <>
    <ul id="meals">
     {meals.map((meal) => (
      <MealItem
       key={meal.id}
       title={meal.name}
       price={meal.price}
       description={meal.description}></MealItem>
     ))}
    </ul>
   </>
  );
}