import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-rtzmgoo41yg3jjce.us.auth0.com"
    clientId="sOCgppjbJgcPwjDs2o26mFzIJkudV692"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)