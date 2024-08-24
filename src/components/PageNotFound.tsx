import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Container className="text-center mt-5">
        <h1 style={{ fontSize: '6rem', color: '#ff6347' }}>404</h1>
        <h2 style={{ color: '#555' }}>Oops! Page Not Found.</h2>
        <p style={{ fontSize: '1.5rem', color: '#888' }}>
          Return, wanderer.
        </p>
        <img
          src="https://media.giphy.com/media/3o6Mbe4xW4J1Re0t6w/giphy.gif"
          alt="Lost in the jungle"
          style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}
        />
        <br />
        <Button
          variant="primary"
          onClick={() => navigate('/')}
          style={{ marginTop: '20px', padding: '10px 20px' }}
        >
          Take Me Home
        </Button>
        <p style={{ marginTop: '10px', color: '#888' }}>
          Or you can click the button above to return to the homepage.
        </p>
      </Container>
    </>
  );
};

export default PageNotFound;