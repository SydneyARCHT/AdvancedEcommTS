import { createContext, Dispatch, SetStateAction } from 'react';

export interface User {
    name: string;
    isLoggedIn: boolean;
}

export interface UserContextType {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;


// import React from 'react';

// export interface User {
//   name: string;
//   isLoggedIn: boolean;
// }

// export interface UserContextType {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// }

// const UserContext = React.createContext<UserContextType | undefined>(undefined);

// export default UserContext;