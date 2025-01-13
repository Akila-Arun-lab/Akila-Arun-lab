
import { BrowserRouter } from "react-router";
/* import App from "./App";
import Contact from "./Contact";
import About from "./About"; */
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HigherOrderComponent from "./HigherOrderComponent";
//import IndividualProduct from "./IndividualProduct";
import 'bootstrap/dist/css/bootstrap.css';

const IndividualProduct = lazy(() => import("./IndividualProduct"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const App = lazy(() => import("./App"));
const NewsStore = lazy(() => import("./NewsStore"));

function AppWithRouting() {
  
  return (
    <BrowserRouter>
    <Suspense fallback="Loading Component"> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/individual-product/:id" 
          element={
            <IndividualProduct />
         } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news-store" element={<NewsStore />} />
        <Route path="/about" element={<About />} />
        <Route path="/higher-order/:logged" element={<HigherOrderComponent />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default AppWithRouting;