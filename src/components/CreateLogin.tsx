// import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
// import { Container, Form, Button, Alert } from 'react-bootstrap';
// import NavBar from './NavBar';
// import UserContext, { User } from '../context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';

// interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// const CreateLogin: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [submissionError, setSubmissionError] = useState<string>('');

//   const { setUser } = useContext(UserContext) || {};
//   const navigate = useNavigate();

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const newUser: User = { name: formData.username, isLoggedIn: true };

//     try {
//       if (!setUser) {
//         throw new Error('UserContext is not properly set up.');
//       }

//       localStorage.setItem('userData', JSON.stringify(formData));

//       setUser(newUser);

//       alert('Account created successfully!');
//       setFormData({
//         firstName: '',
//         lastName: '',
//         username: '',
//         email: '',
//         password: ''
//       });

//       navigate('/');
//     } catch (error) {
//       setSubmissionError('Failed to save data. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <NavBar />
//       <Container fluid>
//         <Container className="mt-4">
//           <h1>Create an Account</h1>
//           {submissionError && <Alert variant="danger">{submissionError}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="firstName">
//               <Form.Label>First Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="lastName">
//               <Form.Label>Last Name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="username">
//               <Form.Label>Username:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="email">
//               <Form.Label>Email:</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="password">
//               <Form.Label>Password:</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </Form.Group>
//             <Button
//               variant="primary"
//               type="submit"
//               disabled={isSubmitting}
//               className="mt-3"
//             >
//               {isSubmitting ? 'Creating...' : 'Create Account'}
//             </Button>
//           </Form>
//         </Container>
//         <br />
//         <br />
//         <Footer />
//       </Container>
//     </>
//   );
// };

// export default CreateLogin;