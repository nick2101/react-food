import {useEffect} from "react";
import {Link} from "react-router-dom";

function NotFound() {

  useEffect(() => {
    document.title = 'Page Not Found - React Food';
  }, []);

  return <div>
    <h4>Page not found</h4>
    <Link to="/" className="btn brown" style={{marginTop: "2rem"}}>GO TO HOME</Link>
  </div>;
}

export {NotFound};
