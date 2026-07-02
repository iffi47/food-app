import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
 const [meals, setMeals] = useState([]);

 useEffect(() => {
  async function fetchMeal() {
   const response = await fetch("http://localhost:3000/meals");
   if (!response.ok) {
    return;
   }
   const mealsData = await response.json();
   setMeals(mealsData);
  }

  fetchMeal();
 }, []);

 return (
  <ul id="meals">
   {meals.map((meal) => (
    <MealItem
     key={meal.id}
     meal={meal}
    />
   ))}
  </ul>
 );
}
