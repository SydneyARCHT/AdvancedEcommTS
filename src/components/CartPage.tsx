import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../features/cartSlice';
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


interface RootState {
  cart: {
    items: CartItem[];
  };
}

interface CartItem {
  id: number;
  title: string;
  price: number;
}

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem({ id: itemId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOrderNow = () => {
    localStorage.setItem('orderHistory', JSON.stringify(cartItems));
    dispatch(clearCart());
    navigate('/orders');
  };

  const totalQuantity = cartItems.length;
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <NavBar />
      <Container>
        <h3>Your Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.title}</strong> - ${item.price}
                  </div>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button
              variant="outline-danger"
              className="mt-3"
              onClick={handleClearCart}
            >
              Clear Cart
            </Button>
            <Row className="mt-4">
              <Col>
                <h4>Total Quantity: {totalQuantity}</h4>
              </Col>
              <Col className="text-end">
                <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
              </Col>
            </Row>
            <Button
              variant="success"
              className="mt-3"
              onClick={handleOrderNow}
            >
              Place Order
            </Button>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default CartPage;