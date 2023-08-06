import {Link} from "react-router-dom";

function CategoryCard(props) {
  const {strCategory, strCategoryThumb, strCategoryDescription} = props;

  return <div className="card">
    <div className="card-image">
      <Link to={`/category/${strCategory}`}>
        <img src={strCategoryThumb} alt={strCategory}/>
      </Link>
    </div>
    <div className="card-content">
      <Link to={`/category/${strCategory}`}>
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </Link>
    </div>
    <div className="card-action">
      <Link to={`/category/${strCategory}`} className="btn brown">
        Watch Category
      </Link>
    </div>
  </div>
}

export {CategoryCard};
