

// import React, { useState, useContext, useEffect, ChangeEvent, FormEvent } from 'react';
// import { Container, Form, Button, Alert } from 'react-bootstrap';
// import NavBar from './NavBar';
// import UserContext, { User } from '../context/UserContext';
// import { useNavigate } from 'react-router-dom';

// export interface FormData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

// const EditProfile: React.FC = () => {
//   const context = useContext(UserContext);

//   }

//   const { user, setUser } = context;
//   const [formData, setFormData] = useState<FormData>({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: '',
//     password: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
//   const [submissionError, setSubmissionError] = useState<string>('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user) {
//       const storedUser = JSON.parse(localStorage.getItem('userData') || '{}');
//       setFormData({
//         firstName: storedUser.firstName || '',
//         lastName: storedUser.lastName || '',
//         username: storedUser.username || '',
//         email: storedUser.email || '',
//         password: storedUser.password || ''
//       });
//     }
//   }, [user]);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       localStorage.setItem('userData', JSON.stringify(formData));
//       setUser({ name: formData.username, isLoggedIn: true });
//       alert('Profile updated successfully!');
//       navigate('/');
//     } catch (error) {
//       setSubmissionError('Failed to update profile. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleDelete = () => {
//     if (window.confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
//       try {
//         localStorage.removeItem('userData');
//         setUser(null);
//         alert('Profile deleted successfully!');
//         navigate('/create-account');
//       } catch (error) {
//         setSubmissionError('Failed to delete profile. Please try again.');
//       }
//     }
//   };

//   return (
//     <>
//       <NavBar />
//       <Container fluid>
//         <Container className="mt-4">
//           <h1>Edit Profile</h1>
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
//               {isSubmitting ? 'Updating...' : 'Update Profile'}
//             </Button>
//           </Form>
//           <Button
//             variant="danger"
//             onClick={handleDelete}
//             className="mt-3"
//           >
//             Delete Profile
//           </Button>
//         </Container>
//       </Container>
//     </>
//   );
// };

// export default EditProfile;