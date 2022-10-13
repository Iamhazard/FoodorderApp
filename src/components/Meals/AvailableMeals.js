import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Sandheko momo",
    description: "Non-vegetrian,Spicies",
    price: 250,
  },
  {
    id: "m2",
    name: "Veg-Burger",
    description: "A Nepales specialty!",
    price: 150,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 200,
  },
  {
    id: "m4",
    name: "Jhol Momo",
    description: "Newari speciality",
    price: 120,
  },
  {
    id: "m5",
    name: "Chicken Pizza",
    description: "Itallian speciality",
    price: 350,
  }
];

const AvilableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvilableMeals;
