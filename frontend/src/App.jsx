import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  //  const [products, error, loading] = customReactQuery("/api/products")

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setError(false);
        setLoading(true);
        let response = await axios.get(`/api/products?search=${search || ""}`, {
          signal: controller.signal,
        });

        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    // clean up
    return () => controller.abort();
  }, [search]);
  if (error) {
    return <h2>Error fetching products</h2>;
  }
  return (
    <>
      <h1>API Handling</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Number of Products are: {products.length}</h2>
      )}
    </>
  );
}

export default App;

// custom hook
/*
const customReactQuery = (urlPath) =>{
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        let response = await axios.get(urlPath);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);


  return [products, error, loading ]
}
  */
