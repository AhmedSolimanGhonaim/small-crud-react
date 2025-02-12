import React, { useState } from "react";
// import "../styles/products.css";

import { Button, Card, Container, Row, Col } from "react-bootstrap";


import img1 from "../assets/products/jacket.jpg";
import img2 from "../assets/products/car.avif";
import img3 from "../assets/products/cam.avif";
import img4 from "../assets/products/jeans.webp";
import img5 from "../assets/products/Laptop.webp";
import img6 from "../assets/products/shirt.png";
import img7 from "../assets/products/tablet.jpg";
import img8 from "../assets/products/watch.jpg";



// Product Data
const products = [
    { id: 1, name: "Laptop", price: "$999", category: "cat1", quantity: 10, img: img1 },
    { id: 2, name: "Smartphone", price: "$499", category: "cat2", quantity: 1, img: img2 },
    { id: 3, name: "Headphones", price: "$199", category: "cat1", quantity: 0, img: img3 },
    { id: 4, name: "Smartwatch", price: "$299", category: "cat2", quantity: 10, img: img4 },
    { id: 5, name: "Laptop", price: "$999", category: "cat1", quantity: 1, img: img5 },
    { id: 6, name: "Smartphone", price: "$499", category: "cat2", quantity: 0, img: img6 },
    { id: 7, name: "Headphones", price: "$199", category: "cat1", quantity: 1, img: img7 },
    { id: 8, name: "Smartwatch", price: "$299", category: "cat1", quantity: 10, img: img8 },
];



const Products = () => {
    const [showProducts, setShowProducts] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Filtered Products
    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <Container className="text-center mt-4">
            {/* Toggle Button */}
            <Button variant={showProducts ? "danger" : "primary"} onClick={() => setShowProducts(!showProducts)}>
                {showProducts ? "Hide Products" : "Show Products"}
            </Button>

            {/* Filter Buttons */}
            {showProducts && (
                <div className="mt-3">
                    <Button variant={selectedCategory === "all" ? "dark" : "outline-dark"} onClick={() => setSelectedCategory("all")}>All</Button>{" "}
                    <Button variant={selectedCategory === "cat1" ? "dark" : "outline-dark"} onClick={() => setSelectedCategory("cat1")}>Category 1</Button>{" "}
                    <Button variant={selectedCategory === "cat2" ? "dark" : "outline-dark"} onClick={() => setSelectedCategory("cat2")}>Category 2</Button>
                </div>
            )}

            {/* Product Grid */}
            {showProducts && (
                <Row className="mt-4">
                    {filteredProducts.map((product) => (
                        <Col key={product.id} md={3} sm={6} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={product.img} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>Price: {product.price}</Card.Text>
                                    <Card.Text>
                                        Quantity:{" "}
                                        {product.quantity > 1 ? (
                                            <Button variant="success">Add to Cart</Button>
                                        ) : product.quantity === 1 ? (
                                            <Button variant="warning">Last Product!</Button>
                                        ) : (
                                            <Button variant="danger" disabled>Out of Stock</Button>
                                        )}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Products;


