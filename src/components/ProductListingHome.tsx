import React from 'react';
import { useProductData } from '../hooks/useProductData';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './ProductListingHome.css';
import { addItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { Product } from '../hooks/useProductData';

const ProductListingHome: React.FC = () => {
    const dispatch = useDispatch();
    const { products, error } = useProductData();

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleAddToCart = (product: Product) => {
        dispatch(addItem(product));
    };

    const displayedProducts = products.slice(0, 9);

    return (
        <Container>
            <br />
            <h3>Popular Items</h3>
            {products.length === 0 ? (
                <p>Loading Products...</p>
            ) : (
                <Row className="justify-content-center">
                    {displayedProducts.map((product) => (
                        <Col key={product.id} md={4} className="mb-4">
                            <Card className="custom-card">
                                <Card.Img variant="top" src={product.image} alt={product.title} />
                                <Card.Body className="d-flex flex-column">
                                    <div className="flex-grow-1">
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>Price: ${product.price}</Card.Text>
                                    </div>
                                    <Button 
                                        variant="outline-primary" 
                                        className="mt-auto"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default ProductListingHome;