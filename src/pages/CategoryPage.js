import {useEffect, useLayoutEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getMealsByCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {NotFound} from "../components/NotFound";
import {MealCard} from "../components/MealCard";

function CategoryPage() {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);
  const {name} = useParams();

  const saveScrollPosition = () => {
    sessionStorage.setItem('SCROLL', `${window.scrollY}`);
    sessionStorage.setItem('PREVIOUS_PAGE', name);
  }

  useLayoutEffect(() => {
    const restoreScrollPosition = () => {
      let scroll = 0;
      if (name === sessionStorage.getItem('PREVIOUS_PAGE')) {
        scroll = Number(sessionStorage.getItem('SCROLL'));
      }
      sessionStorage.removeItem('SCROLL');
      sessionStorage.removeItem('PREVIOUS_PAGE');
      window.scrollTo({top: scroll, behavior: "instant"});
    }

    if (!loading)
      restoreScrollPosition();
  }, [loading, name]);

  useEffect(() => {
    getMealsByCategory(name)
      .then(data => {
        setMeals(data.meals || []);
        document.title = `${data.meals ? name : 'Page Not Found'} - React Food`;
        setLoading(false);
      })
      .catch(error => {
        setMeals([]);
        setLoading(false);
      });
  }, [name]);

  return (
    loading ?
      <Preloader/> :
      meals.length ?
        <>
          <nav className="breadcrumbs">
            <div className="nav-wrapper">
              <div className="col s12">
                <Link to="/" className="breadcrumb">Home</Link>
                <Link to={`/category/${name}`} className="breadcrumb">{name}</Link>
              </div>
            </div>
          </nav>
          <h1 style={{marginTop: 0}}>{name}</h1>
          <div className="card-list">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} {...meal} saveScrollPosition={saveScrollPosition}/>
            ))}
          </div>
        </> :
        <NotFound/>
  );
}

export {CategoryPage};
