import React, { ComponentType, ReactNode } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

interface AuthenticationGuardProps {
  children: ReactNode;
}


const AuthenticationGuard: React.FC<AuthenticationGuardProps> = ({ children }) => {
  const ProtectedComponent = withAuthenticationRequired(
    () => <>{children}</>, 
    {
      onRedirecting: () => <div>Redirecting...</div>,
    }
  );

  return <ProtectedComponent />;
};

export default AuthenticationGuard;