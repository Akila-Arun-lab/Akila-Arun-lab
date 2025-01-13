import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {

    async function getProducts(){
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setIsLoading(false);
    }
    getProducts();
  }, []);

  if(isLoading){
    return <h1>Loading...</h1>;
  }
  if(error){
    return <h1>{error}</h1>;
  }
  return (
    <div class="container">
    <div class="row">
      {
        products.map((product) => (
          <div class="col mt-4" key={product.id} style={{"width":"300px"}}>
            <p>{product.title}</p>
            <p style={{"height": "100px", "overflow": "hidden"}}>{product.description}</p>
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="200px"
            />
            <div>
              <NavLink to={`/individual-product/${product.id}`}>
                <button>Buy now</button>
              </NavLink>
            </div>
            <hr />
          </div>
        ))
      }
    </div>
    </div>
  );
}
export default App;