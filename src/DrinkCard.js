const DrinkCard = ({ drink, onClick }) => {
  return (
    <div className="drink-card" onClick={() => onClick(drink)}>
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        className="drink-card-image"
      />
      <h2 className="card-drink-name">{drink.strDrink}</h2>
    </div>
  );
};

export default DrinkCard;
