import React, { useEffect, useState } from 'react';
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import Footer from './Footer';

interface OrderItem {
    title: string;
    price: number;
  }
  
  const Orders: React.FC = () => {
    const [orders, setOrders] = useState<OrderItem[]>([]);
  
    useEffect(() => {
      const storedOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]') as OrderItem[];
      setOrders(storedOrders);
    }, []);
  
    const handleClearOrders = () => {
      localStorage.removeItem('orderHistory');
      setOrders([]);
    };
  
    const totalQuantity = orders.length;
    const totalPrice = orders.reduce((total, item) => total + item.price, 0);
  

    return (
        <>
            <NavBar /> 
            <Container>
                <h3>Order Summary</h3>
                {orders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <>
                        <ListGroup>
                            {orders.map((item, index) => (
                                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>{item.title}</strong> - ${item.price}
                                    </div>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <Row className="mt-4">
                            <Col>
                                <h4>Total Quantity: {totalQuantity}</h4>
                            </Col>
                            <Col className="text-end">
                                <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
                            </Col>
                        </Row>
                        <Button
                            variant="outline-danger"
                            className="mt-3"
                            onClick={handleClearOrders}
                        >
                            Clear Orders
                        </Button>
                    </>
                )}
            </Container>
            <Footer /> 
        </>
    );
};

export default Orders;