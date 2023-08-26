import React from "react";
import ProductCard from "../component/ProductCard";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/kangjinyong2/H-M-site/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((munu) => (
            <Col lg={3} sm={12}>
              <ProductCard item={munu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
