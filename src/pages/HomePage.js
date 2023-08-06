import {useEffect, useLayoutEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {getAllCategories} from "../api";
import {Preloader} from "../components/Preloader";
import {CategoryCard} from "../components/CategoryCard";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleSearchSubmit = () => {
    setSearchParams(searchParams => {
      if (searchValue)
        searchParams.set("search", searchValue);
      else
        searchParams.delete("search");
      return searchParams;
    });
  };

  useLayoutEffect(() => {
    window.scrollTo({top: 0});
  }, []);

  useEffect(() => {
    getAllCategories()
      .then(data => {
        setCategories(data.categories);
        document.title = 'React Food';
        setLoading(false);
      })
      .catch(error => {
        setCategories([]);
        document.title = 'React Food';
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const newSearch = searchParams.get('search') || '';
    setSearchValue(newSearch);
    setFilteredCategories(newSearch ? categories.filter(category => category.strCategory.toLowerCase()
      .includes(newSearch.toLowerCase())) : categories);
  }, [categories, searchParams]);

  return (
    <>
      <div className="row">
        <div className="input-field col s12">
          <input
            type="search"
            id="search-field"
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === "Enter")
                handleSearchSubmit()
            }}
            onChange={(e) => setSearchValue(e.target.value.trim())}
            value={searchValue}
          />
          <button
            className="btn brown darken-1"
            style={{position: "absolute", top: 0, right: 0}}
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </div>
      </div>
      {
        loading ? <Preloader/> :
          filteredCategories.length ?
            <div className="card-list">
              {filteredCategories.map(el => (
                <CategoryCard key={el["idCategory"]} {...el}/>
              ))}
            </div> :
            <>
              <h4>No meal categories found</h4>
              <Link
                to="/" className="btn brown"
                style={{marginTop: "2rem"}}
              >
                ALL CATEGORIES
              </Link>
            </>
      }
    </>
  );
}

export {HomePage};
