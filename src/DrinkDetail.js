const DrinkDetail = ({ drink, onClose }) => {
  return (
    <div className="drink-detail">
      <button onClick={onClose} className="search-button close-button">
        Close
      </button>
      <h2>{drink.strDrink}</h2>
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        className="drink-card-detail-image"
      />
      <p>
        <strong>Instructions:</strong> {drink.strInstructions}
      </p>
      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 15 }).map((_, index) => {
          const ingredient = drink[`strIngredient${index + 1}`];
          const measure = drink[`strMeasure${index + 1}`];
          return ingredient ? (
            <li key={index}>
              {measure} {ingredient}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default DrinkDetail;
