import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./UI/Error";

const requestConfig = {};

export default function Meals() {
 const {
  data: meals,
  isLoading,
  error,
 } = useHttp("http://localhost:3000/meals", requestConfig, []);

 if (isLoading) {
  return <p className="center">Fetching Data!</p>;
 }
 if (error) {
  return (
   <Error
    title="Fetching Meals"
    errorMessage={error}
   />
  );
 }
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
