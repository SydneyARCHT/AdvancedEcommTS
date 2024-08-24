// import React, { useState } from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import CreateLogin from './components/CreateLogin';
// import UserContext from './context/UserContext'; 
// import { Container } from 'react-bootstrap';
// import EditProfile from './components/EditProfile';
// import PageNotFound from './components/PageNotFound';
// import CartPage from './components/CartPage';
// import { store } from './store';
// import Orders from './components/Orders';
// import Logout from './components/LogOut';
// import { UserContextType } from './reducer/UserState';


// const queryClient = new QueryClient();

// function App() {
//   const [user, setUser] = useState<{ name: string; isLoggedIn: boolean }>({
//     name: '',
//     isLoggedIn: false,
//   });


//   const userContextValue: UserContextType = {
//     user,
//     setUser,
//   };

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Provider store={store}>
//         <UserContext.Provider value={userContextValue}>
//           <Router>
//             <Container fluid>
//               <Routes>
//                 <Route path="/create-account" element={<CreateLogin />} />
//                 <Route path="/" element={<Home />} />
//                 <Route path="/edit-profile" element={<EditProfile />} />
//                 <Route path="/page-not-found" element={<PageNotFound />} />
//                 <Route path="/cart" element={<CartPage />} />
//                 <Route path="/orders" element={<Orders />} />
//                 <Route path="/logout" element={<Logout />} />
//               </Routes>
//             </Container>
//           </Router>
//         </UserContext.Provider>
//       </Provider>
//     </QueryClientProvider>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import CreateLogin from './components/CreateLogin';
// import UserContext from './context/UserContext';
// import { Container } from 'react-bootstrap';
// import EditProfile from './components/EditProfile';
// import PageNotFound from './components/PageNotFound';
// import CartPage from './components/CartPage';
// import { store } from './store';
// import Orders from './components/Orders';
// import Logout from './components/LogOut';
// import { UserContextType } from './context/UserContext';
// import { User } from './reducer/UserState';

// const queryClient = new QueryClient();

// function App() {
//   const [user, setUser] = useState<User | null>(null);

//   const userContextValue: UserContextType = {
//     user,
//     setUser,
//   };


//   return (
//     <QueryClientProvider client={queryClient}>
//       <Provider store={store}>
//         <UserContext.Provider value={userContextValue}>
//           <Router>
//             <Container fluid>
//               <Routes>
//                 <Route path="/create-account" element={<CreateLogin />} />
//                 <Route path="/" element={<Home />} />
//                 <Route path="/edit-profile" element={<EditProfile />} />
//                 <Route path="/page-not-found" element={<PageNotFound />} />
//                 <Route path="/cart" element={<CartPage />} />
//                 <Route path="/orders" element={<Orders />} />
//                 <Route path="/logout" element={<Logout />} />
//               </Routes>
//             </Container>
//           </Router>
//         </UserContext.Provider>
//       </Provider>
//     </QueryClientProvider>
//   );
// }

// export default App;

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import CreateLogin from './components/CreateLogin';
import { Container } from 'react-bootstrap';
// import EditProfile from './components/EditProfile';
import PageNotFound from './components/PageNotFound';
import CartPage from './components/CartPage';
import { store } from './store';
import Orders from './components/Orders';
// import Logout from './components/LogOut';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthenticationGuard from './components/AuthenticationGuard';

const domain = 'dev-rtzmgoo41yg3jjce.us.auth0.com';
const clientId = 'sOCgppjbJgcPwjDs2o26mFzIJkudV692';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{ redirect_uri: window.location.origin }}
        >
          <Router>
            <Container fluid>
              <Routes>
                {/* <Route path="/create-account" element={<CreateLogin />} /> */}
                <Route path="/" element={<Home />} />
                {/* <Route 
                  path="/edit-profile" 
                  element={<AuthenticationGuard><EditProfile /></AuthenticationGuard>} 
                /> */}
                <Route path="/page-not-found" element={<PageNotFound />} />
                <Route path="/cart" element={<CartPage />} />
                <Route 
                  path="/orders" 
                  element={<AuthenticationGuard><Orders /></AuthenticationGuard>} 
                />
                {/* <Route path="/logout" element={<Logout />} /> */}
              </Routes>
            </Container>
          </Router>
        </Auth0Provider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;