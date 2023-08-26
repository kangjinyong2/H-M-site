import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getDetail = async () => {
    let url = ` https://my-json-server.typicode.com/kangjinyong2/H-M-site/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} />
          </Col>
          <Col>
            <h3>{product?.title}</h3>
            <h4>￦{product?.price}</h4>
            <p>Size choice</p>
            <Form.Select
              aria-label="Default select example"
              className="product-form"
            >
              <option value="" selected disabled hidden>
                사이즈 선택
              </option>
              <option value="1">{product?.size[0]}</option>
              <option value="2">{product?.size[1]}</option>
              <option value="3">{product?.size[2]}</option>
            </Form.Select>
            <Button className="product-button" variant="dark">
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
