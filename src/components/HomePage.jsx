import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function HomePage({data}) {
  console.log(data);
  return (
    <>
      <Row className="mt-5 ms-5 mb-5 me-5 justify-content-center">
        { data?.map((item)=>{
          const {id,image,title,price,description} = item
          return <Col key={id} sm={12} md={6} lg={4} xl={3}>
          <Card  style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title><span>{price}</span>
              <Card.Text>
                {description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        })
          
        }
      </Row>
    </>
  );
}

export default HomePage;
