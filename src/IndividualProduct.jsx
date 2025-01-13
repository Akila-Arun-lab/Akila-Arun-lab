import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function IndividualProduct() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    async function getProduct(){
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
      setIsLoading(false);
    }
    getProduct();
  }, []);

  return (
    <div>
      {
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="200px"
            />
          </div>
      }
    </div>
  );
}
export default IndividualProduct;