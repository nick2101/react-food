import {HashRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {HomePage} from "./pages/HomePage";
import {CategoryPage} from "./pages/CategoryPage";
import {MealPage} from "./pages/MealPage";
import {NotFound} from "./components/NotFound";
import {Footer} from "./components/Footer";

function App() {
  return (
    <>
      <Header/>
      <div className="content">
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/category/:name" element={<CategoryPage/>}/>
            <Route path="/meal/:id" element={<MealPage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </HashRouter>
      </div>
      <Footer/>
    </>
  );
}

export default App;
