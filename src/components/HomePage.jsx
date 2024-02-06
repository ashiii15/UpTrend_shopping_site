import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function HomePage({data}) {
  // console.log(data);
  return (
    <>
      <Row className="mt-5 ms-5 mb-5 me-5 justify-content-center">
        { data?.map((item)=>{
          const {id,image,title,price,description} = item
          return <Col className="mb-4" key={id} sm={12} md={6} lg={4} xl={3}>
          <Card  style={{ width: "19rem",height:'40rem' }}>
            <Card.Img variant="top" src={image} height={'300px'} />
            <Card.Body>
              <Card.Title>{title.slice(0,100)}...</Card.Title><p className="fw-bolder">${price}</p>
              <Card.Text>
                <p>{description.slice(0,150)}...</p>
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
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
