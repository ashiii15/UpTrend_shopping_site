import React from "react";
import { Button } from "react-bootstrap";

function Categories({ filterItem }) {
  // console.log(filterItem);
  const filterData = (val) => {
    filterItem(val);
  };

  return (
    <div className="mt-5">
      <Button
        className="me-3"
        variant="primary"
        onClick={() => filterData("all")}
      >
        All
      </Button>
      <Button
        className="me-3"
        variant="secondary"
        onClick={() => filterData("men's clothing")}
      >
        mens clothing
      </Button>
      <Button
        className="me-3"
        variant="success"
        onClick={() => filterData("jewelery")}
      >
        jewelery
      </Button>
      <Button
        className="me-3"
        variant="warning"
        onClick={() => filterData("electronics")}
      >
        electronics
      </Button>
      <Button variant="danger" onClick={() => filterData("women's clothing")}>
        women's clothing
      </Button>
    </div>
  );
}

export default Categories;
