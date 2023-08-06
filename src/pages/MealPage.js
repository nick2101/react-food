import {Link, useParams} from "react-router-dom";
import {useEffect, useLayoutEffect, useState} from "react";
import {getMealById} from "../api";
import {Preloader} from "../components/Preloader";
import {NotFound} from "../components/NotFound";

function MealPage() {
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState(null);
  const {id} = useParams();

  useLayoutEffect(() => {
    window.scrollTo({top: 0});
  }, []);

  useEffect(() => {
    getMealById(id)
      .then(data => {
        setMeal(data.meals?.[0]);
        document.title = `${data.meals?.[0] ? data.meals?.[0]?.strMeal : 'Page Not Found'} - React Food`;
        setLoading(false);
      })
      .catch(error => {
        setMeal(null);
        setLoading(false);
      });
  }, [id]);

  return (
    loading ? <Preloader/> :
      meal ?
        <>
          <nav className="breadcrumbs">
            <div className="nav-wrapper">
              <div className="col s12">
                <Link to="/" className="breadcrumb">Home</Link>
                <Link to={`/category/${meal.strCategory}`} className="breadcrumb">{meal.strCategory}</Link>
                <Link to={`/meal/${id}`} className="breadcrumb">{meal.strMeal}</Link>
              </div>
            </div>
          </nav>
          <div className="meal">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-img"/>
            <div className="meal-description">
              <h1>{meal.strMeal}</h1>
              <h6>{`Category: ${meal.strCategory}`}</h6>
              {meal.strArea ? <h6>{`Area: ${meal.strArea}`}</h6> : null}
            </div>
          </div>
          <div className="recipe">
            <h4>Recipe</h4>
            <table className="centered">
              <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
              </thead>
              <tbody>
              {
                Object.keys(meal).map((key) => {
                  if (key.includes("Ingredient") && meal[key]) {
                    return (
                      <tr key={key}>
                        <td>{meal[key]}</td>
                        <td>{meal[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })
              }
              </tbody>
            </table>
            <p>{meal.strInstructions}</p>
          </div>
          <div className="meal-youtube">
            {meal.strYoutube ? (
              <div className="row">
                <h4>Video</h4>
                <iframe title={id} src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} allowFullScreen/>
              </div>
            ) : null}
          </div>
        </> :
        <NotFound/>
  );
}

export {MealPage};
