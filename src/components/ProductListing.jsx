import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import axios from "axios";
import Categories from "./Categories";

function ProductListing() {
  const [data, SetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  console.log(filterData);
  const fetchProducts = async () => {
    const productData = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err.code);
      });
    SetData(productData.data);
    setFilterData(productData.data);
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
      <HomePage data={filterData} />
    </>
  );
}

export default ProductListing;
