import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import axios from "axios";

function ProductListing() {
    
    const [data,SetData] = useState([])
  const fetchProducts = async () => {
    const productData = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err.code);
      });
    SetData(productData.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <HomePage data= {data}/>
    </>
  );
}

export default ProductListing;
