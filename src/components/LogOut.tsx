// import React, { useEffect } from 'react';
// import { Container, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

// const Logout: React.FC = () => {
//   const { logout } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Perform the logout process
//     logout({ returnTo: window.location.origin }); 

//     // Redirect to the homepage after a delay
//     const timer = setTimeout(() => {
//       navigate('/');
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, [logout, navigate]);

//   return (
//     <Container fluid className="mt-4">
//       <Container>
//         <h1>Logging Out...</h1>
//         <Alert variant="info">
//           You have been logged out. You will be redirected to the homepage shortly.
//         </Alert>
//       </Container>
//     </Container>
//   );
// };

// export default Logout;