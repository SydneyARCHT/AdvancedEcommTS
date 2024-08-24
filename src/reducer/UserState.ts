// import React, { createContext, Dispatch, SetStateAction } from 'react';


// export interface User {
//     name: string;
//     isLoggedIn: boolean;
// }

// export interface UserContextType {
//     user: User;
//     setUser: Dispatch<SetStateAction<User>>;
// }

// const defaultUser: User = { name: '', isLoggedIn: false };

// const UserContext = createContext<UserContextType>({
//     user: defaultUser,
//     setUser: () => {} 
// });



// export default UserContext;


import React, { createContext, Dispatch, SetStateAction } from 'react';


export interface User {
    name: string;
    isLoggedIn: boolean;
}

export interface UserContextType {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
  }


const defaultUser: User = { name: '', isLoggedIn: false };

const UserContext = createContext<UserContextType>({
    user: defaultUser,
    setUser: () => {} 
});



export default UserContext;
