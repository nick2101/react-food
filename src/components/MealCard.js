import {Link} from "react-router-dom";

function MealCard(props) {
  const {idMeal, strMeal, strMealThumb, saveScrollPosition = Function.prototype} = props;

  return <div className="card">
    <div className="card-image">
      <Link to={`/meal/${idMeal}`} onClick={saveScrollPosition}>
        <img src={strMealThumb} alt={strMeal}/>
      </Link>
    </div>
    <div className="card-content">
      <Link to={`/meal/${idMeal}`} onClick={saveScrollPosition}>
        <span className="card-title">{strMeal}</span>
      </Link>
    </div>
    <div className="card-action">
      <Link to={`/meal/${idMeal}`} className="btn brown" onClick={saveScrollPosition}>
        Watch Recipe
      </Link>
    </div>
  </div>
}

export {MealCard};
