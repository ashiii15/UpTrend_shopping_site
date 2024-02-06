import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import axios from "axios";
import Categories from "./Categories";

function ProductListing() {
  const [data, SetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, setError] = useState(null)
  // console.log(filterData);
  const fetchProducts = async () => {
    try {
      const productData = await axios.get("https://fakestoreapi.com/products");
      SetLoading(false);
      SetData(productData.data);
      setFilterData(productData.data);
    } catch (err) {
      SetLoading(false);
      setError(`whoops! Something went wrong`)
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const filterItem = (category) => {
    if (category === "all") {
      setFilterData(data);
      return;
    }
    const newItems = data?.filter((item) => item.category === category);
    setFilterData(newItems);
  };

  return (
    <>
      <Categories filterItem={filterItem} />
      {loading ? <h1 className="mt-5">Loading...</h1> : error ? <h1>{error}</h1> :<HomePage data={filterData} />}
    </>
  );
}

export default ProductListing;
