import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import SearchBar from "./SearchBar";
import DrinkCard from "./DrinkCard";
import DrinkDetail from "./DrinkDetail";

export default function App() {
  const [cocktailRecipes, setCocktailRecipes] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState(null);

  console.log(cocktailRecipes);
  const fetchData = async (drinkName) => {
    console.log("drinkName", drinkName);
    if (!drinkName) return;
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
    );
    setCocktailRecipes(response.data.drinks || []);
  };

  const handleSearch = (drinkName) => {
    fetchData(drinkName);
  };

  const handleCardClick = (drink) => {
    setSelectedDrink(drink);
  };

  const closeDetail = () => {
    setSelectedDrink(null);
  };

  return (
    <div className="App">
      <h1 className="drink-mixer-name">Drink Mixer</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="drink-list">
        {cocktailRecipes.map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
            onClick={handleCardClick}
          />
        ))}
      </div>
      {selectedDrink && (
        <DrinkDetail drink={selectedDrink} onClose={closeDetail} />
      )}
    </div>
  );
}
