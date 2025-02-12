import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Products.css"; 

const initialProducts = [
  {
    id: 1,
    name: "Naruto Action Figure",
    price: "$29.99",
    category: "cat1",
    quantity: 15,
    img: "https://th.bing.com/th/id/OIP.-PLUK3vBSEQlHUZ82kQKPAHaEK?rs=1&pid=ImgDetMain",
    description:
      "This Naruto action figure is a must-have collectible for any anime fan. It comes with detailed sculpting, vibrant colors, and a poseable design. Perfect for display and play.",
  },
  {
    id: 2,
    name: "Sakura Plush Doll",
    price: "$19.99",
    category: "cat2",
    quantity: 8,
    img: "https://th.bing.com/th/id/OIP.cn5u2aGnoTZ3bsoZqEZvLAHaOO?rs=1&pid=ImgDetMain",
    description:
      "Experience the charm of Sakura with this soft and cuddly plush doll. Made with high-quality materials, this doll is perfect for both collectors and children alike. Its detailed design captures Sakura's iconic look.",
  },
  {
    id: 3,
    name: "Sasuke Keychain",
    price: "$9.99",
    category: "cat1",
    quantity: 1,
    img: "https://wallpapercave.com/wp/wp7947434.jpg",
    description:
      "Carry a piece of your favorite anime with you. The Sasuke keychain is a small but detailed accessory, perfect for adding a touch of style to your keys or backpack. Limited quantity available.",
  },
  {
    id: 4,
    name: "Kakashi Poster",
    price: "$14.99",
    category: "cat2",
    quantity: 0,
    img: "https://i.pinimg.com/originals/c5/d0/58/c5d05836f28cb487273968d1bcb21f73.jpg",
    description:
      "Decorate your room with this stunning Kakashi poster. It features high-quality print, vibrant colors, and is a perfect piece for any anime enthusiast. Ideal for adding an edge to your living space.",
  },
];

const ProductCard = ({ product, onRemove }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDescription = () => setShowFullDesc(!showFullDesc);

  const descriptionLimit = 100;
  const shouldTruncate = product.description.length > descriptionLimit;

  const displayDescription =
    showFullDesc || !shouldTruncate
      ? product.description
      : product.description.substring(0, descriptionLimit) + "...";

  return (
    <Card className="product-card bg-black text-light h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.img}
        alt={product.name}
        className="product-image"
      />
      <Card.Body>
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Card.Text className="product-price">Price: {product.price}</Card.Text>
        <Card.Text className="product-price text-info">
          Quantity: {product.quantity}
        </Card.Text>
        <Card.Text>
          {product.quantity > 1 ? (
            <Button variant="success" className="me-2">
              Add to Cart
            </Button>
          ) : product.quantity === 1 ? (
            <Button variant="warning" className="me-2">
              Hurry!
            </Button>
          ) : (
            <Button variant="secondary" disabled className="me-2">
              :(
            </Button>
          )}
          {/* <Button variant="danger" onClick={() => onRemove(product.id)}>
            Remove
          </Button> */}
        </Card.Text>
        <Card.Text className="description">
          {displayDescription}
          {shouldTruncate && (
            <Button
              variant="link"
              onClick={toggleDescription}
              className="p-0 ms-2"
            >
              {showFullDesc ? "Show Less" : "Show More"}
            </Button>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const Products = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [productList, setProductList] = useState(initialProducts);

  const filteredProducts =
    selectedCategory === "all"
      ? productList
      : productList.filter((product) => product.category === selectedCategory);

  // const handleRemove = (id) => {
  //   const updatedList = productList.filter((product) => product.id !== id);
  //   setProductList(updatedList);
  // };

  return (
    <Container className="text-center bg-dark mt-5">
      <Button
        className="toggle-btn"
        variant={showProducts ? "danger" : "primary"}
        onClick={() => setShowProducts(!showProducts)}
      >
        {showProducts ? "Hide Products" : "Show Products"}
      </Button>

      {showProducts && (
        <>
          <div className="category-buttons mt-4 d-flex justify-content-evenly">
            <Button
              variant={selectedCategory === "all" ? "light" : "outline-light"}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </Button>
            <Button
              variant={selectedCategory === "cat1" ? "light" : "outline-light"}
              onClick={() => setSelectedCategory("cat1")}
            >
              Ninja
            </Button>
            <Button
              variant={selectedCategory === "cat2" ? "light" : "outline-light"}
              onClick={() => setSelectedCategory("cat2")}
            >
              Assassin
            </Button>
          </div>

          <Row className="mt-4">
            {filteredProducts.map((product) => (
              <Col key={product.id} md={3} sm={6} className="mb-4">
                <ProductCard product={product}  />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Products;
