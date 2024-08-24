// import React, { useContext } from 'react';
// import UserContext from '../context/UserContext';
// import { Container } from 'react-bootstrap';
// import NavBar from './NavBar';
// import ProductListing from './ProductListingHome';
// import Footer from './Footer';
// import { UserContextType } from '../context/UserContext';


// const Home: React.FC = () => {
//   const context = useContext(UserContext) as UserContextType;

//   const { user } = context;

//   console.log('User Context:', user);

//   return (
//     <Container fluid>
//       <NavBar />
//       <Container className="p-3">
//         {user.isLoggedIn ? (
//           <>
//             <h1>Welcome, {user.name}!</h1>
//             <ProductListing />
//           </>
//         ) : (
//           <>
//             <h1>Welcome to Super Cool E-Comm!</h1>
//             <h4>To Continue, please make an account...</h4>
//             <img 
//               src="https://www.shutterstock.com/shutterstock/photos/107072261/display_1500/stock-photo-happy-family-in-bright-t-shirts-on-a-white-background-107072261.jpg" 
//               alt="Happy Family" 
//               style={{ maxWidth: '2000px', width: '100%', height: 'auto' }} 
//             />
//           </>
//         )}
//       </Container>
//       <Footer /> 
//     </Container>
//   );
// };

// export default Home;


// import React, { useContext } from 'react';
// import UserContext from '../context/UserContext';
// import { Container } from 'react-bootstrap';
// import NavBar from './NavBar';
// import ProductListing from './ProductListingHome';
// import Footer from './Footer';
// import { UserContextType } from '../context/UserContext';
// import { useAuth0 } from '@auth0/auth0-react';

// const Home: React.FC = () => {
//   const context = useContext(UserContext);

//   const { user } = context as UserContextType;

//   if (!context) {
//     return <div>Loading... No Context</div>; 
//   }

//   if (!user) {
//     return <div>Loading... No User</div>;
//   }

//   console.log('User Context:', user);

//   return (
//     <Container fluid>
//       <NavBar />
//       <Container className="p-3">
//         {user.isLoggedIn ? (
//           <>
//             <h1>Welcome, {user.name}!</h1>
//             <ProductListing />
//           </>
//         ) : (
//           <>
//             <h1>Welcome to Super Cool E-Comm!</h1>
//             <h4>To Continue, please make an account...</h4>
//             <img 
//               src="https://www.shutterstock.com/shutterstock/photos/107072261/display_1500/stock-photo-happy-family-in-bright-t-shirts-on-a-white-background-107072261.jpg" 
//               alt="Happy Family" 
//               style={{ maxWidth: '2000px', width: '100%', height: 'auto' }} 
//             />
//           </>
//         )}
//       </Container>
//       <Footer /> 
//     </Container>
//   );
// };

// export default Home;


import React from 'react';
import { Container, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import ProductListing from './ProductListingHome';
import Footer from './Footer';
import { useAuth0 } from '@auth0/auth0-react';

const Home: React.FC = () => {
  const { isAuthenticated, user, loginWithRedirect, isLoading, error } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  return (
    <Container fluid>
      <NavBar />
      <Container className="p-3">
        {isAuthenticated ? (
          <>
            <h1>Welcome, {user?.name}!</h1>
            <ProductListing />
          </>
        ) : (
          <>
            <h1>Welcome to Super Cool E-Comm!</h1>
            <h4 className="mb-3">
              To continue, please{' '}
              <Button variant="primary" onClick={() => loginWithRedirect()}>
                Log In
              </Button>
            </h4>
            <img 
              src="https://www.shutterstock.com/shutterstock/photos/107072261/display_1500/stock-photo-happy-family-in-bright-t-shirts-on-a-white-background-107072261.jpg" 
              alt="Happy Family" 
              style={{ maxWidth: '2000px', width: '100%', height: 'auto' }} 
            />
          </>
        )}
      </Container>
      <Footer /> 
    </Container>
  );
};

export default Home;